const moment = require("moment");
const Promise = require("bluebird");
const nodeHtmlToImage = require("node-html-to-image");
const SpotifyService = require("../spotify/service");
const UserRepository = require("../user/repository");
const TopMusicRepository = require("../topMusic/repository");
const TopMusicHermes = require("../topMusic/hermes");
const HistoryRepository = require("../savedTopHistory/repository");

module.exports = class TopMusicService {
  constructor() {}

  async saveTodayTop10() {
    const historyRepository = new HistoryRepository();

    const todayLogs = await historyRepository.findByDate(
      moment().startOf("day")
    );
    if (todayLogs) return;

    const userRepository = new UserRepository();
    const users = await userRepository.get();

    await Promise.map(
      users,
      async (user) => {
        await this.saveTop10ByTimeTerm(user, "long_term");
        await this.saveTop10ByTimeTerm(user, "medium_term");
        await this.saveTop10ByTimeTerm(user, "short_term");
      },
      { concurrency: 5 }
    );

    await historyRepository.save({ date: moment().startOf("day") });
  }

  async saveTop10ByTimeTerm(user, timeTerm) {
    const spotifyService = new SpotifyService();
    const top10 = await spotifyService.getTopMusics(
      user.spotify_access_token,
      user.spotify_refresh_token,
      timeTerm
    );

    const topMusicRepository = new TopMusicRepository(timeTerm);
    await Promise.map(
      top10,
      async (music, index) => {
        await topMusicRepository.save({
          rank: index + 1,
          name: music.name,
          artist: music.artist,
          date: moment().startOf("day"),
          spotify_id: music.id,
          user_id: user.id,
        });
      },
      {
        concurrency: 10,
      }
    );
  }

  async generateImage() {
    try {
      const response = await new TopMusicHermes().getTop10Html();
      // console.log('response', response);

      nodeHtmlToImage({
        output: "/Users/iuk/projects/cherry-tracker/server/image.png",
        html: response.data,
      }).then(() => console.log("foi"));
    } catch (error) {
      console.log(error);
    }
  }
};
