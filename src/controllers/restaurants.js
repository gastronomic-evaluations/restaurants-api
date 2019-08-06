const Restaurants = require('../repositories/restaurants');

const findAll = async (req, res, next) => {
  try {
    const data = await Restaurants.read(req.userId);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

const save = async (req, res, next) => {
  try {
    const data = await Restaurants.create({ ...req.body, user: req.userId });
    return res.status(201).json(data);
  } catch (err) {
    return next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const data = await Restaurants.readById(req.params.id, req.userId);
    return res.status(200).json(data[0]);
  } catch (err) {
    return next(err);
  }
};

const update = async ({ params, body, userId }, res, next) => {
  try {
    const data = await Restaurants.update(params.id, body, userId);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const data = await Restaurants.remove(req.params.id, req.userId);
    return res.status(204).json(data);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  findAll,
  save,
  remove,
  findById,
  update,
};
