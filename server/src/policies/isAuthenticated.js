const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      res.status(403).send({
        error: 'you do hbk not have access to this resource from /Users/hkon/utd/181209tab-tracker/tab-tracker-master/server/src/policies/isAuthenticated.js'
      })
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}
