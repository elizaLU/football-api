const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
//const db = require('./db') commented out bcs already required in teamRouter
//const { Team } = require('./team/model')
const teamRouter = require('./team/router')

const { Player } = require('./player/model')

const app = express()
const port = process.env.PORT || 4000;

app.use(jsonParser)
app.use(teamRouter)
//app.use(Player)


app.listen(port, () => console.log(`Football app listening on port ${port}!`))