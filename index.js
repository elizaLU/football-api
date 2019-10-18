const cors = require('cors')
const express = require('express')
const middleware = cors()
//body parser must ba installed before routers so that request body is parsed
const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()
//  commented out bcs already required in teamRouter & playerRouter:
const db = require('./db')
const Team = require('./team/model')
const Player = require('./player/model')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const eventRourer = require('./event/router')

const app = express()
const port = process.env.PORT || 5000;

//middleware:
app.use(middleware)
app.use(parserMiddleware)

//routers: 
app.use(teamRouter)
app.use(playerRouter)
app.use(eventRourer)

//db SEEDING SCRIPT:
db
  .sync({ force: true }) //sync({ force: true })this will create table in db, force true will replace whole table after defining relations
  .then(() => {
    console.log('Database schema has been updated.');

    const teamNames = ['Nihilists', 'NatureForces']
    const teams = teamNames.map(teamName => Team.create({ name: teamName }))
    return Promise.all(teams)
  })
  .then(() => {
    const players = [
      { name: 'Žižek', number: 4, teamId: 1 },
      { name: 'Tzara', number: 1, teamId: 1 },
      { name: 'de Sade', number: 9, teamId: 1 },
      { name: 'Nietzsche', number: 8, teamId: 1 },
      { name: 'Carravetta', number: 10, teamId: 1 },
      { name: 'Brassier', number: 2, teamId: 1 },
      { name: 'Fardid', number: 3, teamId: 2 },
      { name: 'GrumpyCat', number: 5, teamId: 2 },
      { name: 'Bacteria', number: 6, teamId: 2 },
      { name: 'Water', number: 7, teamId: 2 },
      { name: 'Earth', number: 10, teamId: 2 },
      { name: 'Fire', number: 12, teamId: 2 },
      { name: 'Wind', number: 11, teamId: 2 },
    ]

    const playerPromises = players.map((player) => Player.create(player))
    return Promise.all(playerPromises)
  })
  .catch(console.error);





app.listen(port, () => console.log(`Football app listening on port ${port}!`))