const path = require('path')
const express = require('express')

const server = express()

const auth = require('./routes/auth')
const events = require('./routes/events')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', auth)
server.use('/api/v1/events', events)

module.exports = server
