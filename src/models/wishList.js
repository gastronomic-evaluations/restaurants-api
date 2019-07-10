const { Schema, model } = require('mongoose');

const wishListSchema = Schema({
  name: { type: String, required: true },
});

module.exports = model('WishList', wishListSchema);
