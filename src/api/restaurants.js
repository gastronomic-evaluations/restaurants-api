const { mongoose, model } = require('node-restful')

const RestaurantsSchema = mongoose.Schema({
  title: String,
  rating: Number,
  knowFor: String,
  ocasion: String,
  observations: String,
  waitTime: String,
  date: { type: Date, default: Date.now },
  ratings: {
    service: Number,
    environment: Number,
    food: Number,
    price: Number
  },
  address: {
    street: String,
    number: Number,
    zipcode: String,
    city: { type: String, default: 'São Paulo' },
    state: { type: String, default: 'SP' },
    country: { type: String, default: 'Brasil' }
  },
  recomendations: {
    askNext: String,
    neverAsk: String,
    worth: Boolean,
  },
  convenience: {
    wifi: Boolean
  }
})

module.exports = model('Restaurant', RestaurantsSchema)

