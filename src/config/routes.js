const { Router } = require('express');
const healthcheck = require('../routes/healthcheck');
const restaurants = require('../routes/restaurants');
const withList = require('../routes/wishList');
const users = require('../routes/user');
const auth = require('../middlewares/auth');

module.exports = (app) => {
  const router = new Router();

  app.use('/restaurants/api', router);
  router.use(['/wishlist', '/restaurants'], auth);

  restaurants(router);
  withList(router);
  healthcheck(router);
  users(router);
};
