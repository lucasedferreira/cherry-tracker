const SpotifyHermes = require('./hermes');

module.exports = class SpotifyService {
  constructor() {}

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
