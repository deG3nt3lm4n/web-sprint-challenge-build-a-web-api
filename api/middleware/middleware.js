const Actions = require('../actions/actions-model')

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


module.exports = {
  logger,
  validateID
}