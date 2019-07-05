const WishList = require('../models/wishList');

const findAll = async (req, res) => {
  const data = await WishList.find({}).exec();
  res.status(200).json(data);
};

const save = async (req, res) => {
  const data = await WishList.create(req.body);
  res.status(201).json(data);
};

const remove = async (req, res) => {
  const data = await WishList.deleteOne({ _id: req.params.id }).exec();
  return res.status(204).json(data);
};

const update = async (req, res) => {
  const data = await WishList.updateOne({ _id: req.params.id }, req.body).exec();
  res.status(200).json(data);
};

const findById = async (req, res) => {
  const data = await WishList.findById(req.params.id).exec();
  res.status(200).json(data);
};

module.exports = {
  findAll,
  save,
  remove,
  update,
  findById,
};
