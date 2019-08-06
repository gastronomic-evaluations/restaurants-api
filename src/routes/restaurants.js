const restaurant = require('../controllers/restaurants');
const { restaurantValidator } = require('../config/validator');

module.exports = (router) => {
  router
    .post('/restaurants', restaurantValidator, restaurant.save)
    .get('/restaurants', restaurant.findAll);

  router
    .put('/restaurants/:id', restaurantValidator, restaurant.update)
    .get('/restaurants/:id', restaurant.findById)
    .delete('/restaurants/:id', restaurant.remove);
};
