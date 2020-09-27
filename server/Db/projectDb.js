const knex = require('knex')
const config = require('../knexfile').development
const connection = knex(config)

function saveNewEvent ({ userID, eventName, description, startDate, endDate }, db = connection) {
  return db('projects')
    .insert({ user_id: userID, name: eventName, description: description, start_date: startDate, date_end: endDate })
}

function getAllEvents (db = connection) {
  return db('projects')
    .select()
}

function deleteEvent (id, db = connection) {
  return db('projects').where({ id }).delete()
}

function addUserToEvent ({ userId, eventId }, db = connection) {
  return db('users_projects')
    .insert({ project_id: eventId, User_id: userId })
}

module.exports = {
  saveNewEvent,
  getAllEvents,
  addUserToEvent,
  deleteEvent
}
