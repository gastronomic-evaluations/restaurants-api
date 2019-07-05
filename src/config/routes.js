const express = require('express');
const restaurantService = require('../api/restaurantsService');
const wishList = require('../services/wishList');
const { applicationStatus } = require('../services/healthcheck');

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
