const Restaurants = require('../models/restaurants');
const ValidationError = require('../config/validationError');

const create = async (restaurant) => {
  if (!restaurant.title) throw new ValidationError({ title: 'O título é um campo obrigatório.' });
  if (!restaurant.date) throw new ValidationError({ date: 'A data é um campo obrigatório.' });
  if (!restaurant.ratings || !restaurant.ratings.service) {
    throw new ValidationError({
      ratings: {
        service: 'A nota para o serviço é um campo obrigatório.',
      },
    });
  }

  return Restaurants.create(restaurant);
};

const update = (_id, restaurant) => {
  if (Object.prototype.hasOwnProperty.call(restaurant, 'title') && !restaurant.title) {
    throw new ValidationError({ title: 'O título é um campo obrigatório.' });
  }

  if (Object.prototype.hasOwnProperty.call(restaurant, 'date') && !restaurant.date) {
    throw new ValidationError({ date: 'A data é um campo obrigatório.' });
  }

  return Restaurants
    .findOneAndUpdate({ _id }, restaurant, { new: true })
    .exec();
};

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
