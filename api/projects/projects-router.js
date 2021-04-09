// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')

const router = express.Router()

// [GET] /api/projects
router.get('/', (req,res) => {
  res.send('get request projects')


})

// [GET] /api/projects/:id
router.get('/:id', (req,res) => {
  res.send('get project with id')
})

// [POST] /api/projects
router.get('/', (req,res) => {
  res.send('post request in project')
})

// [PUT] /api/projects/:id
router.put('/:id', (req,res) => {
  res.send('put request in projects')
})

// [DELETE] /api/projects/:id
router.delete('/:id', (req,res) => {
  res.send('delete request in projects')
})

// [GET] /api/projects/:id/actions
router.get('/:id/actions', (req,res) => {
  res.send('reciving a list of actoins from project')
})

module.exports = router