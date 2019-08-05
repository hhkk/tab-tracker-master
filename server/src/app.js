const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express() // hbk express comes in top level =======================
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')

const hbk = require('./routes')
hbk(app)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log('============================== > hbk5 Server started on port:' + config.port) // 8081
  })
