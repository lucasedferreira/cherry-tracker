const models = require('./models');

module.exports = {
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
  ssl: false,
  logging: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  models
};
