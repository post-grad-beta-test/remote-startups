const knex = require('knex')
const config = require('../../knexfile').development
const connection = knex(config)

//event is probably a better name than body
function saveNewEvent (id, body, db = connection) {
  const { eventName, description, startDate, endDate } = body
  return db('projects')
    .insert({ user_id: id, name: eventName, description: description, date_start: startDate, date_end: endDate })
}

function getAllEvents (db = connection) {
  return db('projects')
    .select()
}

function deleteEvent (id, db = connection) {
  return db('projects').where({ id }).delete()
}

//id is an ambiguous name - userId would make it clearer
function addUserToEvent (id, eventId, db = connection) {
  return db('users_projects')
    .insert({ project_id: eventId, user_id: id })
}

function getUsersForEvent ({ eventId, db = connection }) {
  return db('users_projects')
    .where('event_id', eventId)
    .select('users_id')
}

module.exports = {
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getUsersForEvent

}
