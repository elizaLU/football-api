const express = require('express')
const db = require('./db.js')
const { Team } = require('./team/model')

const app = express()
const port = process.env.PORT || 4000;


app.listen(port, () => console.log(`Football app listening on port ${port}!`))