const { Router } = require('express');
const healthcheck = require('../routes/healthcheck');
const restaurants = require('../routes/restaurants');
const withList = require('../routes/wishList');
const users = require('../routes/user');

module.exports = (app) => {
  const router = new Router();

  app.use('/restaurants/api', router);

  restaurants(router);
  withList(router);
  healthcheck(router);
  users(router);
};
