const SpotifyHermes = require('./hermes');
const UserRepository = require('../user/repository');

module.exports = class SpotifyService {
  constructor() {}

  async getUserInfo(accessToken, refreshToken) {
    // const spotifyHermes = new SpotifyHermes(accessToken, refreshToken);
    // const response = await spotifyHermes.getUserInfo();
    
    const userRepository = new UserRepository();
    await userRepository.save();

    return response.data;
  }

  async getTopMusics(accessToken, refreshToken, timeRange) {
    try {
      const response = await new SpotifyHermes(accessToken, refreshToken).getTop10(timeRange);
      // console.log(response, 'response');
      return response.data;
    } catch (error) {
      console.log(error, 'error', accessToken, refreshToken, timeRange);
    }
  }
};
