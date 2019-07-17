const { validationResult, check } = require('express-validator');

const restaurantValidations = [
  check('title').not().isEmpty().withMessage('O título é um campo obrigatório.'),
  check('date').not().isEmpty().withMessage('A data é um campo obrigatório.'),

  check('ratings.service')
    .isNumeric().withMessage('A nota para o serviço precisa ser um número.')
    .not()
    .isEmpty()
    .withMessage('A nota para o serviço é um campo obrigatório.'),

  check('ratings.food')
    .isNumeric().withMessage('A nota para a comida precisa ser um número.')
    .not()
    .isEmpty()
    .withMessage('A nota para a comida é um campo obrigatório.'),

  check('ratings.environment')
    .isNumeric().withMessage('A nota para o ambiente precisa ser um número.')
    .not()
    .isEmpty()
    .withMessage('A nota para o ambiente é um campo obrigatório.'),

  check('ratings.price')
    .isNumeric().withMessage('A nota para o preço precisa ser um número.')
    .not()
    .isEmpty()
    .withMessage('A nota para o preço é um campo obrigatório.'),
];

const wishValidations = [
  check('name')
    .exists()
    .isString()
    .not()
    .isEmpty()
    .withMessage('O nome é um campo obrigatório.'),
];

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
  restaurantValidations: validate(restaurantValidations),
  wishValidations: validate(wishValidations),
};
