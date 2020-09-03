const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

const apiProxy = require('./routes/apiProxy')

app.use('/', apiProxy)

app.use((error, req, res, next) => {
  console.log(error)
  res.status(error.statusCode || 500).json({ message: error.message})
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})