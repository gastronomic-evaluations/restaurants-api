const WishList = require('../models/wishList');
const ValidationError = require('../config/validationError');

const create = async (wish) => {
  if (!wish.name) throw new ValidationError('name', 'O nome é um campo obrigatório.');

  return WishList.create(wish);
};

const update = (_id, wish) => {
  if (!wish.name) throw new ValidationError('name', 'O nome é um campo obrigatório.');

  return WishList
    .findOneAndUpdate({ _id }, wish, { new: true })
    .exec();
};

const read = () => WishList.find({}).exec();
const readById = id => WishList.findById(id).exec();
const remove = _id => WishList.deleteOne({ _id }).exec();


module.exports = {
  create,
  read,
  update,
  remove,
  readById,
};
