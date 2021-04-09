// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')

const {validateID} = require('../middleware/middleware')

const router = express.Router()

// [GET] /api/actions
router.get('/', (req,res,next) => {
  Actions.get()
    .then(response => res.status(200).json(response))
    .catch(err => next(err))
})

// [GET] /api/actions/:id
router.get('/:id',validateID, (req,res) => {
  res.json(req.actionD)

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