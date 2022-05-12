const SpotifyService = require('../spotify/service');
const UserRepository = require('../user/repository');

module.exports = class TopMusicService {
  constructor() {
    
  }

  saveTodayTop10() {
    const userRepository = new UserRepository();
    const users = userRepository.get();
    console.log(users);
  }
};
