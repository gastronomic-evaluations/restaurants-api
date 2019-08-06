const { validationResult } = require('express-validator');
const wishValidator = require('../validators/wishlist');
const restaurantValidator = require('../validators/restaurants');
const { authValidator, signInValidator } = require('../validators/users');

const errorFormatter = ({ param, msg }) => ({ [param]: msg });

const formatErrorsToFront = (errors) => {
  const result = Object.assign(...errors.array());

  Object.keys(result).forEach((current) => {
    const [object, key] = current.split('.');

    if (current.includes('.')) {
      result[object] = result[object] || {};
      result[object][key] = result[current];
      delete result[current];
    }
  });

  return result;
};

const validate = validations => async (req, res, next) => {
  await Promise.all(validations.map(validation => validation.run(req)));

  const errors = validationResult(req).formatWith(errorFormatter);

  if (errors.isEmpty()) return next();

  return res.status(400).json({ errors: formatErrorsToFront(errors) });
};

module.exports = {
  restaurantValidator: validate(restaurantValidator),
  wishValidator: validate(wishValidator),
  authValidator: validate(authValidator),
  signInValidator: validate(signInValidator),
};
