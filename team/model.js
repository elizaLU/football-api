const Sequelize = require('sequelize')

const db = require("../db.js")

const Team = db.define(
  'team',
  {
    name: {
      type: Sequelize.STRING,
      //column name:
      field: 'team_name'
    }
  },
  //whole table name
  { tableName: 'football_teams' }
)

module.exports = Team