const restaurant = require('../controllers/restaurants');
const { restaurantValidations } = require('../config/validations');

module.exports = (router) => {
  router
    .post('/restaurants', restaurantValidations, restaurant.save)
    .get('/restaurants', restaurant.findAll);

  router
    .put('/restaurants/:id', restaurantValidations, restaurant.update)
    .get('/restaurants/:id', restaurant.findById)
    .delete('/restaurants/:id', restaurant.remove);
};
