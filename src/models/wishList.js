const mongoose = require('mongoose');

const wishListSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('WishList', wishListSchema);
