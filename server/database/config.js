const Sequelize = require("sequelize");
const importModels = require("./models");
const associations = require('./associations');

class DB {
  constructor() {
    this.instance;
    // this.init();
  }

  async init() {
    if (!this.instance) {
      const sequelize = new Sequelize({
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        dialect: "postgres",
        ssl: true,
        logging:
          !process.env.NODE_ENV || process.env.NODE_ENV === "development",
      });

      await sequelize.authenticate();
      this.instance = sequelize;

      this.instance = importModels(this.instance);
      associations(this.instance.models)
    }
  }
}

module.exports = new DB();
