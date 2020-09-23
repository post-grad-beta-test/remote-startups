const path = require('path')
const express = require('express')

const server = express()

const user = require('./routes/user')
const admin = require('./routes/admin')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/user', user)
server.use('/api/v1/admin', admin)

module.exports = server
