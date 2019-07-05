const dotenv = require('dotenv');

dotenv.config({ path: '.env.dev' });

const { PORT } = process.env;
const app = require('./src/app');

app.listen(PORT);
