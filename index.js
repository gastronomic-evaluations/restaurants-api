const dotenv = require('dotenv');
const http = require('http');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = require('./src/app');

http.createServer(app).listen(process.env.PORT);
