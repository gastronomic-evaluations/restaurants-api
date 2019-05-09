const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const morgan = require('morgan')
const restful = require('node-restful')
const mongoose = restful.mongoose
const cors = require('cors')
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://db:27017/restaurants'
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({type:'application/vnd.api+json'}))
app.use(methodOverride())
app.use(cors())

mongoose.connect(MONGODB_URI)

const RestaurantsSchema = mongoose.Schema({
  title: String,
  rating: Number,
  ocasion: String,
  fame: String,
  knowFor: String,
  date: { type: Date, default: Date.now }
})

const Restaurant = app.restaurant = restful
  .model('restaurant', RestaurantsSchema)
  .methods(['get', 'post', 'put', 'delete'])

Restaurant.register(app, '/restaurants')

app.get('/healthcheck', (req, res) => {
  res.send('alive!')
})

app.listen(PORT)
