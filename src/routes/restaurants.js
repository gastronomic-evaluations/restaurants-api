const Restaurants = require('../models/restaurants');

const findAll = async (req, res) => {
  const data = await Restaurants.find().exec();
  return res.status(200).json(data);
};

const save = async (req, res) => {
  const data = await Restaurants.create(req.body);
  return res.status(201).json(data);
};

const findById = async (req, res) => {
  const data = await Restaurants.findById(req.params.id).exec();
  return res.status(200).json(data);
};

const update = async ({ params, body }, res) => {
  const { id: _id } = params;
  const data = await Restaurants.findOneAndUpdate({ _id }, body, { new: true }).exec();
  return res.status(200).json(data);
};

const remove = async (req, res) => {
  const data = await Restaurants.deleteOne({ _id: req.params.id }).exec();
  return res.status(204).json(data);
};

module.exports = {
  findAll,
  save,
  remove,
  findById,
  update,
};
