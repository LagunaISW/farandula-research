const express = require('express')

const api_router = express.Router()

api_router.use((req, res, next) => {
  console.log('Node webapp API invoked')
  next()
})

api_router.get('/', (req, res) => res.json({
  message: 'Welcome to the Node webapp API'
}))

api_router.route('/test')
  .post((req, res) => {
    const name = req.body.name
    res.json({
      message: `Hello ${name}, from Node`
    })
  })
  .get((req, res) => {
    const name = req.query.name
    res.json({
      message: `Hello ${name}, from Node`
    })
  })

module.exports = api_router
