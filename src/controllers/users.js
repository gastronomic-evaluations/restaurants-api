const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../repositories/users');

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 86400,
  });
}

const save = async (req, res, next) => {
  try {
    const user = await Users.create(req.body);
    user.password = undefined;
    return res.status(201).json({
      email: user.email,
      name: user.name,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    return next(err);
  }
};

const auth = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.readOne({ email });

  if (!user) {
    return res.status(400).send({ error: 'Usuário ou senha incorretos.' });
  }

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: 'Usuário ou senha incorretos.' });
  }

  user.password = undefined;

  return res.status(200).send({
    name: user.name,
    token: generateToken({ id: user.id }),
  });
};

module.exports = {
  save,
  auth,
};
