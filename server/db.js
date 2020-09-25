const knex = require('knex')
const config = require('../knexfile').development
const connection = knex(config)
const { generateHash } = require('authenticare/server')

function getUserByName (username, db = connection) {
  return db('users')
    .where('username', username)
    .select('id', 'username', 'first_name', 'last_name', 'email', 'password_hash as hash')
    .first()
    .then(user => {
      return user
    })
}

function saveNewUser (user, db = connection) {
  console.log(user)
  return userExists(user.username, db)
    .then(exists => {
      if (exists) {
        return alert()
      }
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      return db('users')
        .insert({
          username: user.username,
          password_hash: passwordHash
        })
    })
}

function userExists (username, db = connection) {
  console.log('userexists')
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function updateDetails ({ username, firstName, lastName, email }, db = connection) {
  return db('users')
    .where('username', username)
    .insert({ first_name: firstName, last_name: lastName, email: email })
}
module.exports = {
  userExists,
  saveNewUser,
  getUserByName,
  updateDetails
}
