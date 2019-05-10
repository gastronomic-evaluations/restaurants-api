
const server = require('./src/server')
require('./src/database')
require('./src/routes')(server)