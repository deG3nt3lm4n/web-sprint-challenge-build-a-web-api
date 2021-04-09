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
router.delete('/:id',validateProjectId, async (req,res,next) => {
  try {
    await Projects.remove(req.params.id)
    res.send(req.projectD)
  } catch (error) {
    next(error)
  }
})

// [GET] /api/projects/:id/actions
router.get('/:id/actions',validateProjectId, async (req,res,next) => {

  const {id} = req.params

  try {

    const data = await Projects.getProjectActions(id)

    if(!data){
      res.status(404).json({message: 'sorry project has no actions'})
    }else{
      res.status(200).json(data)
    }

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