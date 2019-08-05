const Restaurants = require('../models/restaurants');

const create = async restaurant => Restaurants.create(restaurant);

const update = (_id, restaurant, user) => Restaurants
  .findOneAndUpdate({ _id, user }, restaurant, { new: true })
  .exec();

const read = userId => Restaurants.find({ user: userId }).exec();
const readById = (_id, user) => Restaurants.find({ _id, user }).exec();
const remove = (_id, user) => Restaurants.deleteOne({ _id, user }).exec();

module.exports = {
  create,
  read,
  update,
  remove,
  readById,
};
