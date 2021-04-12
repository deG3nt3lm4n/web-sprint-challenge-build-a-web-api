const Actions = require('../actions/actions-model')
const Projects = require('../projects/projects-model')

const logger = (req,res,next) => {
  let timestamp = new Date()
  let url = req.originalUrl
  let method = req.method
  console.log(`${timestamp}-${method}-${url}`)
  next()
}

const validateID = async (req,res,next) => {
  const {id} = req.params

  try {
    const data = await Actions.get(id)

    if(!data){
      res.status(404).json({message: 'sorry action not found'})
    }else{
      req.actionD = data
      next()
    }


  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

const validateBody = (req,res,next) => {
  const data = req.body

  if(!data.project_id || !data.description || !data.notes){
    res.status(400).json({message: 'misisng requird filieds'})
  }else{
    next()
  }

}

const validateProjectId = async (req,res,next) => {
  const {id} = req.params

  try {

    const data = await Projects.get(id)

    if(!data){
      res.status(404).json('Sorry there is not project with that id')
    }else{
      req.projectD = data
      next()
    }

  } catch (error) {
    res.status(500).json({message: error.message})
  }

}

const validateProjectBody = (req,res,next) => {

  const projectBody = req.body

  if(!projectBody.name || !projectBody.description){
    res.status(400).json({message: 'missing required fields'})
  }else{
    next()
  }

}


module.exports = {
  logger,
  validateID,
  validateBody,
  validateProjectId,
  validateProjectBody
}