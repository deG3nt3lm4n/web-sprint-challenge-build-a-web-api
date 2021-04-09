// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')

const router = express.Router()

// [GET] /api/actions
router.get('/', (req,res) => {
  res.send('actions get request')
})


module.exports = router