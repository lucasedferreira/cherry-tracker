const axios = require("axios");

module.exports = class SpotifyRequest {
  constructor() {
    this.baseUrl = "https://api.spotify.com/v1";
  }

  async getTopFromLastMonth(accessToken) {
    return await axios.get(`${this.baseUrl}/me/top/tracks?time_range=short_term&limit=10`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  async getTopFromLast6Months(accessToken) {
    return await axios.get(`${this.baseUrl}/me/top/tracks?time_range=medium_term&limit=10`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  async getTopFromAllTime(accessToken) {
    return await axios.get(`${this.baseUrl}/me/top/tracks?time_range=long_term&limit=10`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};
