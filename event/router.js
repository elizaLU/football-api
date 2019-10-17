const { Router } = require('express')
const Event = require('./model')


const router = new Router()

router.post('/event', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next)
}
)

module.exports = router