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

//console.log("Team from team model:", Team)

module.exports = Team