const { Router } = require('express')
const Team = require('./model')

const router = new Router()
//test: http :4000/team 
router.get('/team', (req, res, next) => {
  Team.findAll()
    .then(team => { res.json(team) })
    .catch(next)
});
//test: http :4000/team name=test
router.post('/team', (req, res, next) => {
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(next)
})

router.get('/team/:id', (res, req, next) => {
  Team.findByPk(req.params.id)
    .then(team => res.json(team))
    .catch(next)
})

module.exports = router;