const Users = require('../repositories/users');

const save = async (req, res, next) => {
  try {
    const data = await Users.create(req.body);
    data.password = undefined;
    return res.status(201).json(data);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  save,
};
