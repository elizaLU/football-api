const { Router } = require('express')
const Team = require('./model')
const Player = require('../player/model')
//console.log("Team from team router:", Team)

const router = new Router()
//test: http :4000/team 
router.get('/teams', (req, res, next) => {
  Team.findAll()
    .then(team => { res.json(team) })
    .catch(next)
});
//test: http :4000/team name=test
router.post('/teams', (req, res, next) => {
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(next)
})
//test: http GET :4000/team/2
router.get('/teams/:id', (req, res, next) =>
  Team.findByPk(req.params.id, { include: [Player] })
    .then(team => res.json(team))
    .catch(next)
);

module.exports = router;