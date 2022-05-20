const axios = require("axios");

module.exports = class SpotifyHermes {
  constructor() {
    this.baseUrl = "https://tracker.choerim.com/";
  }

  async getTop10Html() {
    return await axios.get(this.baseUrl);
  }
}