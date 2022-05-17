const sequelize = require('../../database/config');

module.exports = class UserRepository {
  constructor() {
    this.model = sequelize.instance.models.User;
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
