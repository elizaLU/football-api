const Player = require('./model')
const { Router } = require('express')


const router = new Router()
//test: http :4000/team ==> []
router.get('/player', (req, res, next) => {
  Player.findAll()
    .then(player => { res.json(player) })
    .catch(next)
});
//test: http :4000/team name=duck, number=13
router.post('/player', (req, res, next) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(next)
})
//test: http :4000/player/3
router.get('/player/:id', (req, res, next) =>
  Player.findByPk(req.params.id)
    .then(player => res.json(player))
    .catch(next)
);

module.exports = router;