// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')

const {validateID, validateBody} = require('../middleware/middleware')

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
router.post('/',validateBody, async (req,res, next) => {

  try {

    const data = await Actions.insert(req.body)

    if(!data){
      res.status(404).json({message: 'action not posted'})
    }else{
      res.status(200).json(data)
    }

  } catch (err) {
    next(err)
  }

})

// [PUT] /api/actions/:id
router.put('/:id',validateID,validateBody, async (req,res, next) => {

  try {

    const data = await Actions.update(req.params.id, req.body )

    if(!data){
      res.status(404).json({message: 'data was not able to change'})
    }else{
      res.status(201).json(data)
    }

  } catch (err) {
    next(err)
  }


})

//[DELETE] /api/actions/:id
router.delete('/:id',validateID, async(req,res,next) => {
  const {id} = req.params
  try {
    await Actions.remove(id)
    res.json(req.actionD)
  } catch (error) {
    next(error)
  }

})


router.use((err,req,res,next) => {
  res.status(500).json({
    message: 'Something broken',
    error: err.message
  })
})



module.exports = router