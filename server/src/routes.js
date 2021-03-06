const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const UstodosController = require('./controllers/UstodosController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

// server server context hbkhbk

const isAuthenticated = require('./policies/isAuthenticated')
// hbkrouter
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/ustodos',
    UstodosController.index)
  app.get('/ustodos/:ustodoId',
    UstodosController.show)
  app.put('/ustodos/:ustodoId',
    UstodosController.put)
  app.post('/ustodos',
    UstodosController.post)

  app.get('/songs',
    SongsController.index)
  app.get('/songs/:songId',
    SongsController.show)
  app.put('/songs/:songId',
    SongsController.put)
  app.post('/songs',
    SongsController.post)

  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)
  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.remove)

  app.get('/histories',
    isAuthenticated,
    HistoriesController.index)
  app.post('/histories',
    isAuthenticated,
    HistoriesController.post)
  app.get('/ustodohistories',
    isAuthenticated,
    HistoriesController.index)
  app.post('/ustodohistories',
    isAuthenticated,
    HistoriesController.post)
}
