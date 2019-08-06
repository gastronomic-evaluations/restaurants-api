const users = require('../controllers/users');
const { authValidator, signInValidator } = require('../config/validator');

module.exports = (router) => {
  router
    .post('/signin', signInValidator, users.save);

  router
    .post('/auth', authValidator, users.auth);
};
