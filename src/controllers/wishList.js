const WishList = require('../repositories/wishList');

const findAll = async (req, res, next) => {
  try {
    const data = await WishList.read();
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

const save = async (req, res, next) => {
  try {
    const data = await WishList.create(req.body);
    return res.status(201).json(data);
  } catch (err) {
    return next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const data = await WishList.remove(req.params.id);
    return res.status(204).json(data);
  } catch (err) {
    return next(err);
  }
};

const update = async ({ params, body }, res, next) => {
  try {
    const data = await WishList.update(params.id, body);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const data = await WishList.readById(req.params.id);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  findAll,
  save,
  remove,
  update,
  findById,
};
