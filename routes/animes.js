const router = require('express').Router()
const animesCtrl = require('../controllers/animes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*----------Public Routes --------*/
router.get('/', animesCtrl.index)


/*--------Protected Routes ------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, animesCtrl.create)
router.post('/:id/comments', checkAuth, animesCtrl.addComment)

module.exports = router