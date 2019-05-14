const { mongoose, model } = require('node-restful')

const RestaurantsSchema = mongoose.Schema({
  title: String,
  rating: Number,
  knowFor: String,
  ocasion: String,
  observations: String,
  waitTime: String,
  address: String,
  date: { type: Date, default: Date.now },
  ratings: {
    service: Number,
    environment: Number,
    food: Number,
    price: Number
  },
  recomendations: {
    askNext: String,
    neverAsk: String,
    worth: Boolean,
  },
  convenience: {
    wifi: Boolean,
    goodWines: Boolean,
    music: Boolean,
    goodForGroups: Boolean,
    funny: Boolean,
    goodForCouples: Boolean
  }
})

module.exports = model('Restaurant', RestaurantsSchema)

