const { Schema, model } = require('mongoose');

const ratingsSchema = Schema({
  service: { type: Number, required: true },
  environment: { type: Number, required: true },
  food: { type: Number, required: true },
  price: { type: Number, required: true },
});

const recomendationsSchema = Schema({
  askNext: String,
  neverAsk: String,
  worth: { type: Boolean, default: false },
});

const convenienceSchema = Schema({
  wifi: { type: Boolean, default: false },
  goodWines: { type: Boolean, default: false },
  music: { type: Boolean, default: false },
  goodForGroups: { type: Boolean, default: false },
  funny: { type: Boolean, default: false },
  goodForCouples: { type: Boolean, default: false },
  airConditioning: { type: Boolean, default: false },
  parking: { type: Boolean, default: false },
  acceptCards: { type: Boolean, default: false },
  acceptReserve: { type: Boolean, default: false },
  goodDrinks: { type: Boolean, default: false },
  openLate: { type: Boolean, default: false },
  outdoorTables: { type: Boolean, default: false },
});

const RestaurantsSchema = Schema({
  title: { type: String, required: true },
  knowFor: String,
  ocasion: String,
  observations: String,
  order: String,
  waitTime: String,
  address: String,
  date: { type: String, required: true },
  ratings: ratingsSchema,
  recomendations: recomendationsSchema,
  convenience: convenienceSchema,
});

module.exports = model('Restaurant', RestaurantsSchema);
