const { mongoose, model } = require('node-restful')

const RestaurantsSchema = mongoose.Schema({
  fame: String,
  title: String,
  rating: Number,
  knowFor: String,
  ocasion: String,
  observations: String,
  date: { type: Date, default: Date.now },
})

module.exports = model('Restaurant', RestaurantsSchema)