const router = require('express').Router()
const animesCtrl = require('../controllers/animes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*----------Public Routes --------*/


/*--------Protected Routes ------*/

router.use(decodeUserFromToken)
router.get('/', animesCtrl.index)
router.post('/', checkAuth, animesCtrl.create)
router.put('/:id', checkAuth, animesCtrl.update)
router.delete('/:id', checkAuth, animesCtrl.delete)
router.post('/:id/comments', checkAuth, animesCtrl.addComment)

module.exports = router