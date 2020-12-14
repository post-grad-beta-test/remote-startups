const knex = require('knex')
// is this changed
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = connection
