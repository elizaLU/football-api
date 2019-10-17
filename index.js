const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
//  commented out bcs already required in teamRouter & playerRouter:
//const db = require('./db')
//const { Team } = require('./team/model')
//const { Player } = require('./player/model')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')


const app = express()
const port = process.env.PORT || 4000;

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)


app.listen(port, () => console.log(`Football app listening on port ${port}!`))