const {
  sequelize,
  Song,
  UsToDo,
  User,
  Bookmark,
  History
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const ustodos = require('./ustodos.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./histories.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(song => {
        console.log('hbk creating song');
        Song.create(song)
      })
    )

    await Promise.all(
      ustodos.map(ustodo => {
        UsToDo.create(ustodo)
      })
    )

    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )

    await Promise.all(
      histories.map(history => {
        History.create(history)
      })
    )
  })
