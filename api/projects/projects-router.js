// Write your "projects" router here!
const express = require('express')
const { validateProjectId, validateProjectBody } = require('../middleware/middleware')
const Projects = require('./projects-model')

const router = express.Router()

// [GET] /api/projects
router.get('/', (req,res,next) => {
  Projects.get()
    .then(resD => res.status(200).json(resD))
    .catch(err => next(err))
})

// [GET] /api/projects/:id
router.get('/:id',validateProjectId, (req,res) => {
  res.status(200).json(req.projectD)
})

// [POST] /api/projects
router.post('/',validateProjectBody, (req,res,next) => {

  Projects.insert(req.body)
    .then(resp => res.status(200).json(resp))
    .catch(err => next(err))

})

// [PUT] /api/projects/:id
router.put('/:id',validateProjectId, validateProjectBody, async (req,res,next) => {

  try {

    const data = await Projects.update(req.params.id, req.body)

    if(!data){
      res.status(400).json({message: 'data not valid to update'})
    }else{
      res.status(200).json(data)
    }

  } catch (error) {
    next(error)
  }

})

// [DELETE] /api/projects/:id
router.delete('/:id', (req,res) => {
  res.send('delete request in projects')
})

// [GET] /api/projects/:id/actions
router.get('/:id/actions', (req,res) => {
  res.send('reciving a list of actoins from project')
})


router.use((err,req,res,next) => {
  res.status(500).json({
    message: 'Something broken',
    error: err.message
  })
})


module.exports = router