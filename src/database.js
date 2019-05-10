const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://db:27017/restaurants'

module.exports = mongoose.connect(MONGODB_URI)