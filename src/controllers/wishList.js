const WishList = require('../repositories/wishList');

const findAll = async (req, res, next) => {
  try {
    const data = await WishList.read(req.userId);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

const save = async (req, res, next) => {
  try {
    const data = await WishList.create({ ...req.body, user: req.userId });
    return res.status(201).json(data);
  } catch (err) {
    return next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const data = await WishList.remove(req.params.id, req.userId);
    return res.status(204).json(data);
  } catch (err) {
    return next(err);
  }
};

const update = async ({ params, body, userId }, res, next) => {
  try {
    const data = await WishList.update(params.id, body, userId);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const data = await WishList.readById(req.params.id, req.userId);
    return res.status(200).json(data[0]);
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
