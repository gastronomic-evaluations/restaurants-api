const express = require('express');
const middlewares = require('./config/middlewares');
const routes = require('./config/routes');
const database = require('./config/database');

const app = express();

database();
middlewares(app);
routes(app);

module.exports = app;
