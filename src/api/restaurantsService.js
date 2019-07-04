const Restaurants = require('./restaurants');

Restaurants.methods(['get', 'post', 'put', 'delete']);
Restaurants.updateOptions({ new: true, runValidators: true });

module.exports = Restaurants;
