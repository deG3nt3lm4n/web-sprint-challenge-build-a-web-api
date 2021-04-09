// Write your "projects" router here!
const express = require('express')

const router = express.Router()

// [GET] /api/projects
router.get('/', (req,res) => {
  res.send('get request')
})

module.exports = router