const healthcheck = require('../controllers/healthcheck');

module.exports = (router) => {
  router.get('/healthcheck', healthcheck);
};
