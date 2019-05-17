const express = require('express')
const monitorConfig = require('./monitorConfig')
const monitor = require('express-status-monitor')(monitorConfig)

module.exports = (server) => {
  const router = express.Router()
  server.use(monitor)
  server.use('/api', router)

  const restaurantService = require('./api/restaurantsService')
  restaurantService.register(router, '/restaurants')

  server.use('/healthcheck', (req, res) => res.send('alive!'))
}
