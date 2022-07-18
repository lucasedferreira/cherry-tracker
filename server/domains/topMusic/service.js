const moment = require("moment");
const Promise = require("bluebird");
const nodeHtmlToImage = require('node-html-to-image')
const SpotifyService = require("../spotify/service");
const UserRepository = require("../user/repository");
const TopMusicRepository = require("../topMusic/repository");
const TopMusicHermes = require("../topMusic/hermes");

module.exports = class TopMusicService {
  constructor() {}

  async saveTodayTop10() {
    const topMusicRepository = new TopMusicRepository();
    const userRepository = new UserRepository();
    const users = await userRepository.get();

    for (const user of users) {
      const spotifyService = new SpotifyService();
      const top10 = await spotifyService.getTopMusics(
        user.spotify_access_token,
        user.spotify_refresh_token,
        "long_term"
      );

      await Promise.map(
        top10.items,
        async (music, index) => {
          await topMusicRepository.save({
            rank: index + 1,
            name: music.name,
            artist: music.artists[0].name,
            date: moment().startOf('day'),
            spotify_id: music.id,
            user_id: user.id,
          });
        },
        {
          concurrency: 10,
        }
      );
    }
  }

  async generateImage() {
    try {
      const response = await new TopMusicHermes().getTop10Html();
      // console.log('response', response);

      nodeHtmlToImage({
        output: '/Users/iuk/projects/cherry-tracker/server/image.png',
        html: response.data
      }).then(() => console.log('foi'));
    } catch (error) {
      console.log(error)
    }
  }
};
