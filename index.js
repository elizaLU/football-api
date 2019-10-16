const express = require('express')
//const db = require('./db') commented out bcs already required in teamRouter
//const { Team } = require('./team/model')
const teamRouter = require('./team/router')

const app = express()
const port = process.env.PORT || 4000;

app.use(teamRouter)


app.listen(port, () => console.log(`Football app listening on port ${port}!`))