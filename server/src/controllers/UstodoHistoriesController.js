const {
  UstodoHistory,
  Ustodo
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const ustodohistories = await UstodoHistory.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Ustodo
          }
        ],
        order: [
          ['createdAt', 'DESC']
        ]
      })
        .map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Ustodo,
          history
        ))
      res.send(_.uniqBy(ustodohistories, history => history.UstodoId))
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the history'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {ustodoId} = req.body
      const history = await UstodoHistory.create({
        UstodoId: ustodoId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the history object'
      })
    }
  }
}
