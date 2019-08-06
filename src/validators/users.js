const { check } = require('express-validator');

const authValidator = [
  check('email').not().isEmpty().withMessage('O email é um campo obrigatório.'),
  check('password').not().isEmpty().withMessage('A senha é um campo obrigatório.'),
];

const signInValidator = [
  check('name').not().isEmpty().withMessage('O nome é um campo obrigatório.'),
  check('email').not().isEmpty().withMessage('O email é um campo obrigatório.'),
  check('password').not().isEmpty().withMessage('A senha é um campo obrigatório.'),
];

module.exports = { authValidator, signInValidator };
