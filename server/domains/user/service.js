const UserRepository = require('../user/repository');

module.exports = class UserService {
  constructor() {
    
  }

  async saveUserFromSpotify(spotifyUser, accessToken, refreshToken) {
    const user = {
      name: spotifyUser.display_name,
      email: spotifyUser.email,
      spotify_id: spotifyUser.id,
      spotify_access_token: accessToken,
      spotify_refresh_token: refreshToken,
    }

    return await new UserRepository().save(user);
  }
};
