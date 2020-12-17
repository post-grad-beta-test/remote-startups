import { getAuthorizationHeader } from 'authenticare/client'
import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }

/**
 * Post new event to projects table
 * @param {string} userId - User Id
 * @param {object} event - Form field inputs from CreateProject
 * @param {string} event.name - The name of the event
 * @param {string} event.description - A description of the event
 * @param {string} event.startDate - The date the event starts
 * @param {string} event.endDate - The date the event ends
 * @param {string} event.topic - The general topic of the event
 *
 * @returns {Promise.<number[]>} array[0] eventId
 */
export function addNewEvent (userId, event) {
  return request
    .post('/api/v1/events/' + userId)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(event)
    .then((res) => res.body)
    .catch((err) => console.error(err))
}

/**
 * Event object details
 * @typedef {object.<string, any>} Event
 * @property {number} id - event id
 * @property {string} name- Name of event
 * @property {string} description - description of event
 * @property {string} topic - event category
 * @property {number} startDate - start date of event
 * @property {number} endDate - end date of event
 */
/**
 * Request array of events from projects table
 *
 * @returns {Promise.<Event[]>}
 */
export function showAllEvents () {
  return request
    .get('/api/v1/events')
    .set(acceptJsonHeader)
    .then((res) => res.body)
    .catch((err) => console.error(err))
}

/**
 * Add userID and EventId to users_projects table
 * @param {string} userId - User Id
 * @param {string} eventId - eventId
 *
 * @returns {Promise.<number[]>} array[0] team id
 */
export function joinEvent (userId, eventId) {
  return request
    .post(`/api/v1/events/${userId}/attending`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send({ eventId })
    .then((res) => res.body)
    .catch((error) => {
      if (error.status === undefined) {
        return { project_id: '' }
      }
      throw Error('fetch event error')
    })
}
/**
 * Get a list of all events user has joined
 * @param {string} id - User Id
 *
 * @returns {Promise.<number[]>} A list of event ids
 */
export function showAllUserEventIds (userId) {
  return request
    .get(`/api/v1/events/${userId}/attending`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then((res) => res.body)
    .catch((err) => console.error(err))
}
