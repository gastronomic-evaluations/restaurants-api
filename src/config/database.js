const mongoose = require('mongoose');

module.exports = () => {
  mongoose.Promise = global.Promise;
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://db:27017/restaurants_test';
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
};
