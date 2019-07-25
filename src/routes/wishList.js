const wishList = require('../controllers/wishList');
const { wishValidations } = require('../config/validations');

module.exports = (router) => {
  router
    .get('/wishlist', wishList.findAll)
    .post('/wishlist', wishValidations, wishList.save);

  router
    .put('/wishlist/:id', wishValidations, wishList.update)
    .delete('/wishlist/:id', wishList.remove)
    .get('/wishlist/:id', wishList.findById);
};
