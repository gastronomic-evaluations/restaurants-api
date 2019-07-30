const mongoose = require('mongoose');

module.exports = () => {
  mongoose.Promise = global.Promise;
  const { MONGODB_URI } = process.env;

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};
