const Users = require('../models/users');

const create = async user => Users.create(user);

const update = (_id, user) => Users
  .findOneAndUpdate({ _id }, user, { new: true })
  .exec();

const read = () => Users.find({}).exec();
const readOne = filter => Users.findOne(filter).select('+password');
const remove = _id => Users.deleteOne({ _id }).exec();

module.exports = {
  create,
  read,
  update,
  remove,
  readOne,
};
