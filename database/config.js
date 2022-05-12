const Sequelize = require("sequelize");
const importModels = require("./models");

class DB {
  constructor() {
    console.log('opaa');
    this.instance;
    this.init();
  }

  async init() {
    if (!this.instance) {
      const sequelize = new Sequelize({
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        dialect: "postgres",
        ssl: false,
        logging:
          !process.env.NODE_ENV || process.env.NODE_ENV === "development",
      });

      await sequelize.authenticate();
      this.instance = sequelize;

console.log(this.instance, 'entrou');
      this.instance = importModels(this.instance);
    }
  }
}

module.exports = new DB();
