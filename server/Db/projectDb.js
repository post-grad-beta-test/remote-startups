const knex = require('knex')
const config = require('../../knexfile').development
const connection = knex(config)

function saveNewEvent(id, event, db = connection) {
  const { name, description, startDate, endDate, topic } = event
  return db('projects').insert({
    user_id: id,
    name,
    description,
    date_start: startDate,
    date_end: endDate,
    topic,
  })
}

function getAllEvents(db = connection) {
  return db('projects').select()
}

function deleteEvent(id, db = connection) {
  return db('projects').where({ id }).delete()
}

function addUserToEvent(userId, eventId, db = connection) {
  return db('users_projects').insert({ project_id: eventId, user_id: userId })
}

function getUsersForEvent(eventId, db = connection) {
  return db('users_projects')
    .select('user_id')
    .where('project_id', eventId)
    .then((users) => {
      return Promise.all(
        users.map((user) => {
          return db('users')
            .where('users.id', user.user_id)
            .select('username', 'image')
        })
      )
    })
}

function getEventsForUser(userId, db = connection) {
  return db('users_projects')
    .select('project_id')
    .where('user_id', userId)
    .then((events) => {
      return Promise.all(
        events.map((event) => {
          return db('projects')
            .where('projects.id', event.project_id)
            .select('*')
        })
      )
    })
}
module.exports = {
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getUsersForEvent,
  getEventsForUser,
}
