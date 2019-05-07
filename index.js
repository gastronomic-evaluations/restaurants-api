var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;

var cors = require('cors')
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://db:27017/restaurants'
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cors())

mongoose.connect(MONGODB_URI);

var Restaurant = app.restaurant = restful.model('restaurant', mongoose.Schema({
    title: String,
    rating: Number,
  }))
  .methods(['get', 'post', 'put', 'delete']);

Restaurant.register(app, '/restaurants');

app.get('/healthcheck', (req, res) => {
  res.send('alive!')
})

app.listen(PORT);
