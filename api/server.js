const express = require('express');
const helmet = require('helmet')
const server = express();

const mw = require('./middleware/middleware.js')
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')

server.use(express.json())
server.use(helmet())
server.use(mw.logger)
server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)


server.get('/', (req,res) => {
  res.send('<h1>Welcome to nothing</h1>')
})


module.exports = server;
