const express = require('express')
const body_parser = require('body-parser')
const api_router = require('./api-router')

const app = express()
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())

app.use('/api', api_router)

app.set('port', (process.env.PORT || 3001))

app.listen(app.get('port'), () => {
  console.log(`Node server listening @ http://localhost:${app.get('port')}/`)
})
