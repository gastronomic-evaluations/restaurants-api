const { Schema, model } = require('mongoose');

const wishListSchema = Schema({
  name: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
});

module.exports = model('WishList', wishListSchema);
