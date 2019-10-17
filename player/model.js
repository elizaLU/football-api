const Sequelize = require('sequelize')
const Team = require('../team/model')
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
);
//console.log("player from player model:", Player)
//console.log("Team from player model:", Team)
//definig relationship
//Sequelize will automatically add a teamId field to the player table. teamId stores the foreign key of the team

Player.belongsTo(Team)
Team.hasMany(Player)

module.exports = Player