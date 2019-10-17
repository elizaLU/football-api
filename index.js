const cors = require('cors')
const express = require('express')

const middleware = cors()
//body parser must ba installed before routers so that request body is parsed
const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()
//  commented out bcs already required in teamRouter & playerRouter:
//const db = require('./db')
//const { Team } = require('./team/model')
//const { Player } = require('./player/model')
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


// console.log("Team from Index.js", Player)

app.listen(port, () => console.log(`Football app listening on port ${port}!`))