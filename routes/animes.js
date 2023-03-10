const router = require('express').Router()
const animesCtrl = require('../controllers/animes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*----------Public Routes --------*/


/*--------Protected Routes ------*/

router.use(decodeUserFromToken)
router.get('/', checkAuth, animesCtrl.index)
router.post('/', checkAuth, animesCtrl.create)
router.put('/:id', checkAuth, animesCtrl.update)
router.delete('/:id', checkAuth, animesCtrl.delete)


module.exports = router