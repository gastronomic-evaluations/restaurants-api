const validationError = require('./validationError');

module.exports = (app) => {
  app.use((err, req, res, next) => {
    if (err instanceof validationError) {
      res.status(400).json(err);
    } else {
      res.status(500).json(err);
    }

    next();
  });
};
