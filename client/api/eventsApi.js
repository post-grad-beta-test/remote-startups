import { getEncodedToken } from 'authenticare/client'
import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }

/**
 * Post new event to projects database
 * @param {string} id -User Id
 * @param {object} event -Form field inputs from CreateProject
 */
export function addNewEvent(id, event) {
  return request
    .post('/api/v1/events/' + id)
    .set(acceptJsonHeader)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send(event)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function showAllEvents() {
  return request
    .get('/api/v1/events')
    .set(acceptJsonHeader)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function joinEvent(id, eventID) {
  return request
    .post('/api/v1/events/attending')
    .set(acceptJsonHeader)
    .send(id, eventID)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function showAllUserEvents(id) {
  return request
    .get(`/api/v1/events/${id}/attending`)
    .set(acceptJsonHeader)
    .then((res) => res.body)
    .catch((error) => console.error(error))
}
