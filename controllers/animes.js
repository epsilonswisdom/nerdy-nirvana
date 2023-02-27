const { Anime, Profile, Comment } = require('../models')
const comment = require('../models/comment')
async function create(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const anime = await Anime.create(req.body)
    res.status(200).json(anime)
  } catch (error) {
    res.status(500).json({err: error})
  }
}

async function index(req, res) {
  try {
    const animes = await Anime.findAll({
      include: [{ model: Comment, as: 'comments'}]
    })
  
    res.status(200).json(animes)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function addComment(req, res) {
  try {
    req.body.animeId = req.params.id
    req.body.profileId = req.user.profile.id
    const comment = await Comment.create(req.body)
    res.status(200).json(comment)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  addComment,
}