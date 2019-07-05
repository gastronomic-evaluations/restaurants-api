const express = require('express');
const restaurantService = require('../routes/restaurants');
const wishList = require('../routes/wishList');
const { applicationStatus } = require('../routes/healthcheck');

module.exports = (app) => {
  const router = express.Router();
  app.use('/api', router);

  restaurantService.register(router, '/restaurants');

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
