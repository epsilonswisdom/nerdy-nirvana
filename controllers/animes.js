const { Anime } = require('../models')

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
    const animes = await Anime.findAll({})
    res.status(200).json(animes)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const anime = await Anime.findbyPk(req.params.id)
    if (anime.profileId === req.user.profile.id){
      anime.set(req.body)
      await anime.save()
    }
    res.status(200).json(anime)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function deleteAnime(req, res) {
  try {
    const anime = await Anime.findbyPk(req.params.id)
    if (anime.profileId === req.user.profile.id){
      await anime.destroy()
    }
    res.status(200).json(anime)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  update,
  delete: deleteAnime,
}