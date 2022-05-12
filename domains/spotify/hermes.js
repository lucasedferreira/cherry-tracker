const axios = require("axios");
const qs = require("query-string");

module.exports = class SpotifyHermes {
  constructor(accessToken, refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.baseUrl = "https://api.spotify.com/v1";
    this.authUrl = "https://accounts.spotify.com";
  }

  get #base64Creds() {
    const authorizationCode = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;
    console.log(authorizationCode);
    return new Buffer.from(authorizationCode, "utf8")
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
  }

  async #request(config) {
    console.log("requesting");
    if (!config.headers) config.headers = {};

    if (config.authType === "bearer" && !this.accessToken)
      throw new Error("No access token set");

    if (config.authType === "bearer")
      config.headers.Authorization = `Bearer ${this.accessToken}`;
    if (config.authType === "basic")
      config.headers.Authorization = `Basic ${this.#base64Creds}`;

    if (!config.headers["Content-Type"])
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (config.data && typeof config.data !== "string")
      config.data = qs.stringify(config.data);

    return new Promise((resolve, reject) => {
      axios(config)
        .then((res) => resolve(res))
        .catch(async (err) => {
          const status = err?.response?.status;
          if (status === 503) {
            console.log("entrouuuu");
            await this.#request(config).then(resolve).catch(reject);
          }

          const msg = err?.response?.data?.error?.message;
          if (msg !== "The access token expired") return reject(err);

          this.#refresh()
            .then(async () => resolve(await this.#request(config)))
            .catch(reject);
        });
    });
  }

  async #refresh() {
    console.log("refreshing");

    return new Promise((resolve, reject) => {
      this.#request({
        method: "post",
        url: `${this.authUrl}/api/token`,
        data: {
          grant_type: "refresh_token",
          refresh_token: this.refreshToken,
        },
        authType: "basic",
      })
        .then(({ data }) => {
          console.log("refreshed", data);
          this.accessToken = data.access_token;
          if (data.refresh_token) this.refreshToken = data.refresh_token;
          resolve();
        })
        .catch(reject);
    });
  }

  async auth(authorizationCode) {
    return await this.#request({
      method: "post",
      url: `${this.authUrl}/api/token`,
      data: {
        grant_type: "authorization_code",
        redirect_uri: `${process.env.APP_URL}/spotify/pong`,
        code: authorizationCode,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      },
    });
  }

  async getUserInfo() {
    return await this.#request({
      url: `${this.baseUrl}/me`,
      method: "get",
      authType: "bearer",
    });
  }

  async getTop10(timeRange = "long_term") {
    return await this.#request({
      url: `${this.baseUrl}/me/top/tracks?time_range=${timeRange}&limit=10`,
      method: "get",
      authType: "bearer",
    });
  }
};
