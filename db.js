const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:football-api@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

db
  .sync() //this will create table in db
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

module.exports = db