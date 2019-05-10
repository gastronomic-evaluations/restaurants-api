const host = process.env.NODE_ENV === 'production'
  ? 'https://gastronomic-evaluations-api.herokuapp.com'
  : 'http://localhost'

const port = process.env.NODE_ENV === 'production'
  ? '80'
  : '5000'

module.exports = {
  title: 'Gastronomic Evaluations',
  healthChecks: [
    {
      protocol: 'http',
      host,
      path: '/healthcheck',
      port: '5000'
    }
  ]
}