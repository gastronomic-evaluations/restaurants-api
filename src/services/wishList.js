const WishList = require('../models/wishList');

const findAll = (req, res) => {
  WishList.find({}, (err, list) => {
    res.status(200).json(list);
  });
};

const save = (req, res) => {
  WishList.create(req.body, (err, list) => {
    res.status(201).json(list);
  });
};

const remove = (req, res) => {
  WishList.deleteOne({ id: req.params.id }, (err, list) => {
    res.status(204).json(list);
  });
};

module.exports = { findAll, save, remove };
