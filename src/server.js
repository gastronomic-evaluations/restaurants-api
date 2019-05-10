const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({type:'application/vnd.api+json'}))
app.use(methodOverride())
app.use(cors())


app.get('/healthcheck', (req, res) => res.send('alive!'))
app.listen(PORT, () => console.log(`Backend running in port ${PORT}`))

module.exports = app