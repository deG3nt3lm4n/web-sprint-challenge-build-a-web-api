// Write your "actions" router here!
const express = require('express')
const { route } = require('../projects/projects-router')
const Actions = require('./actions-model')

const router = express.Router()

// [GET] /api/actions
router.get('/', (req,res) => {
  res.send('actions get request')
})

// [GET] /api/actions/:id
router.get('/:id', (req,res) => {
  res.send('action get with id')
})

// [POST] /api/actions
router.post('/', (req,res) => {
  res.send('actions post request')
})

// [PUT] /api/actions/:id
router.put('/:id', (req,res) => {
  res.send('actions put request')
})

//[DELETE] /api/actions/:id
router.delete('/id', (req,res) => {
  res.send('actions delete request')
})


router.use((err,req,res,next) => {
  res.status(500).json({
    message: 'Something broken',
    error: err.message
  })
})



module.exports = router