const {UsToDo} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let ustodos = null
      const search = req.query.search
      if (search) {
        ustodos = await UsToDo.findAll({
          where: {
            $or: [
              'ustodotitle', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        ustodos = await UsToDo.findAll({
          limit: 10
        })
      }
      res.send(ustodos)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const ustodo = await UsToDo.findById(req.params.ustodoId)
      res.send(ustodo)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const ustodo = await UsToDo.create(req.body)
      res.send(ustodo)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to create the song'
      })
    }
  },
  async put (req, res) {
    try {
      await UsToDo.update(req.body, {
        where: {
          id: req.params.ustodoId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}
