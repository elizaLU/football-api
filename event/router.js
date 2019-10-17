const { Router } = require('express')
const Event = require('./model')


const router = new Router()
//test: http :5000/event name=test date=2020-01-01 description='Winning over greek semi-gods'
router.post('/event', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next)
}
)
//test: http :5000/event
router.get('/event', (req, res, next) => {
  Event.findAll()
    .then(event => { res.json(event) })
    .catch(next)
}
)
router.put(
  '/event/:id',
  (request, response, next) => Event
    .findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next)
)
router.delete(
  '/event/:id',
  (request, response, next) => Event
    .destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
)


module.exports = router