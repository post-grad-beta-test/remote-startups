const {
  userExists,
  saveNewUser,
  getUserByName,
  addDetails,
  updateEmail,
} = require('./db')

const {
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getUsersForEvent,
  getEventsForUser,
} = require('./projectDb')

module.exports = {
  userExists,
  saveNewUser,
  getUserByName,
  addDetails,
  updateEmail,
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getUsersForEvent,
  getEventsForUser,
}
