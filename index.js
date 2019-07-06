const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'dev') {
  dotenv.config({ path: '.env.dev' });
}

const { PORT } = process.env;
const app = require('./src/app');

app.listen(PORT);
