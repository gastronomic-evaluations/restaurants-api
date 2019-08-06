const wishList = require('../controllers/wishList');
const { wishValidator } = require('../config/validator');

module.exports = (router) => {
  router
    .get('/wishlist', wishList.findAll)
    .post('/wishlist', wishValidator, wishList.save);

  router
    .put('/wishlist/:id', wishValidator, wishList.update)
    .delete('/wishlist/:id', wishList.remove)
    .get('/wishlist/:id', wishList.findById);
};
