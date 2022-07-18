const SpotifyHermes = require("./hermes");
const UserRepository = require("../user/repository");

module.exports = class SpotifyService {
  constructor() {}

  async getUserInfo(accessToken, refreshToken) {
    const spotifyHermes = new SpotifyHermes(accessToken, refreshToken);
    const response = await spotifyHermes.getUserInfo();

    // const userRepository = new UserRepository();
    // await userRepository.save();

    return response.data;
  }

  async getTopMusics(accessToken, refreshToken, timeRange) {
    const response = await new SpotifyHermes(
      accessToken,
      refreshToken
    ).getTop10(timeRange);

    const tracks = response.data.items;
    const parsedTop10 = tracks.map((track) => {
      return {
        id: track.id,
        name: track.name,
        artist: track.artists
          .map((artist) => {
            return artist.name;
          })
          .join(", "),
        image: track.album.images[0].url,
      };
    });
    return parsedTop10;
  }
};
