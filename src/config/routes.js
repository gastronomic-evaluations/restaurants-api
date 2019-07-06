const restaurant = require('../routes/restaurants');
const wishList = require('../routes/wishList');
const { applicationStatus } = require('../routes/healthcheck');

module.exports = (app) => {
  app.route('/api/restaurants')
    .post(restaurant.save)
    .get(restaurant.findAll);

  app.route('/api/restaurants/:id')
    .get(restaurant.findById)
    .put(restaurant.update)
    .delete(restaurant.remove);

  app.route('/api/wishlist')
    .get(wishList.findAll)
    .post(wishList.save);

  app.route('/api/wishlist/:id')
    .put(wishList.update)
    .delete(wishList.remove)
    .get(wishList.findById);

  app.route('/healthcheck')
    .get(applicationStatus);
};
