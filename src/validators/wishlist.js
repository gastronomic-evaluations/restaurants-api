const { check } = require('express-validator');

module.exports = [
  check('name')
    .exists()
    .isString()
    .not()
    .isEmpty()
    .withMessage('O nome é um campo obrigatório.'),
];
