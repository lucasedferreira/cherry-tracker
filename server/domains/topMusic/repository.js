const sequelize = require("../../database/config");

module.exports = class TopMusicRepository {
  constructor(timeTerm) {
    switch (timeTerm) {
      case "short_term":
        this.model = sequelize.instance.models.ShortTopMusic;
        break;

      case "medium_term":
        this.model = sequelize.instance.models.MediumTopMusic;
        break;

      default:
        this.model = sequelize.instance.models.LongTopMusic;
        break;
    }
  }

  save(data) {
    if (data.id) {
      const id = data.id;
      delete data.id;

      let condition = { id: id };

      return this.model.update(data, {
        where: condition,
        individualHooks: true,
        transaction: this.transaction,
      });
    } else {
      return this.model.create(data);
    }
  }

  get() {
    return this.model.findAll();
  }
};
