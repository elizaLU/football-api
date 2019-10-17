const Sequelize = require('sequelize')

const db = require("../db.js")

const Player = db.define(
  'player',
  {
    name: {
      type: Sequelize.STRING,
      //column name:
      field: 'player_name'
    },
    number: {
      type: Sequelize.INTEGER,
      field: 'player_number'
    }
  },
  //whole table name
  { tableName: 'players' }
)

module.exports = Player