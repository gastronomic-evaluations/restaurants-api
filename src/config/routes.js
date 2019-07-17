const restaurant = require('../routes/restaurants');
const wishList = require('../routes/wishList');
const healthcheck = require('../routes/healthcheck');
const { restaurantValidations, wishValidations } = require('./validations');

module.exports = (app) => {
  app.route('/api/restaurants')
    .post(restaurantValidations, restaurant.save)
    .get(restaurant.findAll);

  app.route('/api/restaurants/:id')
    .put(restaurantValidations, restaurant.update)
    .get(restaurant.findById)
    .delete(restaurant.remove);

  app.route('/api/wishlist')
    .get(wishList.findAll)
    .post(wishValidations, wishList.save);

  app.route('/api/wishlist/:id')
    .put(wishValidations, wishList.update)
    .delete(wishList.remove)
    .get(wishList.findById);

  app.route('/healthcheck')
    .get(healthcheck);
};
