const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')

const router = new Router()
//test: http :4000/team ==> []
router.get('/players', (req, res, next) => {
  Player.findAll()
    .then(player => { res.json(player) })
    .catch(next)
});
//test: http POST :4000/player name=duck, number=13
router.post('/players', (req, res, next) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(next)
})
//test: http GET :4000/players/3
//
router.get('/players/:id', (req, res, next) =>
  Player.findByPk(req.params.id, { include: [Team] })
    .then(player => res.json(player))
    .catch(next)
);

//console.log("here's the players", Player)

module.exports = router;