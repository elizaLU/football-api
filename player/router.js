const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')

const router = new Router()
//test: http :4000/team ==> []
router.get('/player', (req, res, next) => {
  Player.findAll()
    .then(player => { res.json(player) })
    .catch(next)
});
//test: http POST :4000/player name=duck, number=13
router.post('/player', (req, res, next) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(next)
})
//test: http GET :4000/player/3
router.get('/player/:id', (req, res, next) =>
  Player.findByPk(req.params.id, { include: [Team] })
    .then(player => res.json(player))
    .catch(next)
);

//console.log("here's the player", Player)

module.exports = router;