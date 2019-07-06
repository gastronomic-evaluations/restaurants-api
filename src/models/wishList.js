const { Schema, model } = require('mongoose');

const wishListSchema = Schema({
  name: String,
});

module.exports = model('WishList', wishListSchema);
