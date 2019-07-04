const express = require('express');
const restaurantService = require('../api/restaurantsService');

module.exports = (app) => {
  const router = express.Router();
  app.use('/api', router);

  restaurantService.register(router, '/restaurants');

  app.get('/healthcheck', (req, res) => res.json('alive!'));
};
