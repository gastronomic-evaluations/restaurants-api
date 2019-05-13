const { mongoose, model } = require('node-restful')

const RestaurantsSchema = mongoose.Schema({
  title: String,
  rating: Number,
  knowFor: String,
  ocasion: String,
  observations: String,
  date: { type: Date, default: Date.now },
  ratings: {
    service: Number,
    environment: Number,
    food: Number,
    price: Number
  }
})

module.exports = model('Restaurant', RestaurantsSchema)

