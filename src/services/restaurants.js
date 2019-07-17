const Restaurants = require('../models/restaurants');

const create = async restaurant => Restaurants.create(restaurant);

const update = (_id, restaurant) => Restaurants
  .findOneAndUpdate({ _id }, restaurant, { new: true })
  .exec();

const read = () => Restaurants.find({}).exec();
const readById = id => Restaurants.findById(id).exec();
const remove = _id => Restaurants.deleteOne({ _id }).exec();

module.exports = {
  create,
  read,
  update,
  remove,
  readById,
};
