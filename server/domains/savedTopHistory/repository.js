const sequelize = require("../../database/config");

module.exports = class TopMusicRepository {
  constructor() {
    this.model = sequelize.instance.models.SavedTopHistory;
  }

  save(data) {
    return this.model.create(data);
  }

  findByDate(date) {
    return this.model.findOne({
      where: { date },
      raw: true,
    });
  }
};
