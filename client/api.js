import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

export function sendRegistrationEmail(email) {
  return request
    .post('/api/v1/sendRegistrationEmail')
    .set(acceptJsonHeader)
    .send({ email })
    .then(res => res.body)
    .catch(error => {
      res.status(500).send('ooops something went wrong')
    })
}

export function sendReminderEmail(email) {
  return request
    .post('/api/v1/sendReminderEmail')
    .set(acceptJsonHeader)
    .send({ email })
    .then(res => res.body)
    .catch(error => {
      res.status(500).send('something went wrong')
    })
}

export function getUserInfo(username) {
  return request
    .get(`/api/v1/auth?username=${username}`)
    .set(acceptJsonHeader)
    .then(res => res.body)
    .catch((error) => {
      res.status(500).send('something went wrong')
    })
}

export function updateUserInfo(info) {
  return request
    .patch(`/api/v1/auth`)
    .set(acceptJsonHeader)
    .send(info)
    .then(res => res.body)
    .catch((error) => {
      res.status(500).send('something went wrong')
    })
}

export function getUsername() {
  return request 
    .post('/api/v1/auth/username')
    .set(acceptJsonHeader)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch((error) => {
      res.status(500).send('something went wrong')
    })
}