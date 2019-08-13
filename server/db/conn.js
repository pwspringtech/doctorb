const Sequelize = require('sequelize');

const dbConnString = process.env.DATABASE_URL || 'postgres://localhost/toddberlandmd'

const conn = new Sequelize(dbConnString, {
  logging: false,
});

module.exports = conn;
