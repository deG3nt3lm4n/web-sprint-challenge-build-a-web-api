const logger = (req,res,next) => {
  let timestamp = new Date()
  let url = req.originalUrl
  let method = req.method
  console.log(`${timestamp}-${method}-${url}`)
  next()
}


module.exports = {
  logger
}