const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const routes = require('./app/routes/index.js')

const app = express()

app.use('/dist', express.static('dist'))

require('dotenv').load()

mongoose.connect(process.env.MONGOLAB_URI)

routes(app)

const port = 3000

app.listen(port, () => {
  console.log(`App is listenting on port ${port}`)
})
