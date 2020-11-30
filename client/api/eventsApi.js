import { getEncodedToken } from 'authenticare/client'
import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }

/**
 * Post new event to projects table
 * @param {string} id - User Id
 * @param {object} event - Form field inputs from CreateProject
 */
export function addNewEvent (id, event) {
  return request
    .post('/api/v1/events/' + id)
    .set(acceptJsonHeader)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send(event)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

/**
 * Request array of events from projects table
 * @returns {array} All events
 */
export function showAllEvents () {
  return request
    .get('/api/v1/events')
    .set(acceptJsonHeader)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}
/**
 * Add userID and EventId to users_projects table
 * @param {string} id - User Id
 * @param {string} eventId - eventId
 */
export function joinEvent (id, eventId) {
  return request
    .post('/api/v1/events/attending')
    .set(acceptJsonHeader)
    .send(id, eventId)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function showAllUserEvents (id) {
  return request
    .get(`/api/v1/events/${id}/attending`)
    .set(acceptJsonHeader)
    .then((res) => res.body)
    .catch((error) => console.error(error))
}
