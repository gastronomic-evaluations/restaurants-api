const WishList = require('../models/wishList');

const create = async wish => WishList.create(wish);

const update = (_id, wish, user) => WishList
  .findOneAndUpdate({ _id, user }, wish, { new: true })
  .exec();

const read = userId => WishList.find({ user: userId }).exec();
const readById = (_id, user) => WishList.find({ _id, user }).exec();
const remove = (_id, user) => WishList.deleteOne({ _id, user }).exec();

module.exports = {
  create,
  read,
  update,
  remove,
  readById,
};
