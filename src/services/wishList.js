const WishList = require('../models/wishList');

const create = async wish => WishList.create(wish);

const update = (_id, wish) => WishList
  .findOneAndUpdate({ _id }, wish, { new: true })
  .exec();

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
