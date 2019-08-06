const { check } = require('express-validator');

module.exports = [
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
