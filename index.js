var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;
const PORT = process.env.PORT || 5000
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

mongoose.connect("mongodb://db:27017/restaurants");

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
