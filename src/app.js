const express = require('express');
const middlewares = require('./config/middlewares');
const routes = require('./config/routes');
const database = require('./config/database');
const handleErrors = require('./config/handleErrors');

const app = express();

database();
middlewares(app);
routes(app);
handleErrors(app);

module.exports = app;
