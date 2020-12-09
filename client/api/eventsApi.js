import { getAuthorizationHeader } from 'authenticare/client'
import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }

export function addNewEvent (id, event) {
  return request
    .post('/api/v1/events/' + id)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(event)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function showAllEvents () {
  return request
    .get('/api/v1/events')
    .set(acceptJsonHeader)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function joinEvent (id, eventId) {
  console.log('request', eventId, 5)
  return request
    .post(`/api/v1/events/${id}/attending`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send({ eventId })
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function showAllUserEvents (id) {
  return request
    .get(`/api/v1/events/${id}/attending`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then((res) => res.body)
    .catch((error) => console.error(error))
}
