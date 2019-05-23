const { mongoose, model } = require('node-restful')

const RestaurantsSchema = mongoose.Schema({
  title: String,
  knowFor: String,
  ocasion: String,
  observations: String,
  order: String,
  waitTime: String,
  address: String,
  date: String,
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
    goodForCouples: Boolean,
    airConditioning: Boolean,
    parking: Boolean,
    acceptCards: Boolean,
    acceptReserve: Boolean,
    goodDrinks: Boolean,
    openLate: Boolean,
    outdoorTables: Boolean
  }
})

module.exports = model('Restaurant', RestaurantsSchema)

