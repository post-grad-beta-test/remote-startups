import { getEncodedToken, register as authRegister, signIn as authLogin } from 'authenticare/client'
// import { getUserTokenInfo, isAuthenticated, removeUser } from '../auth'
import request from 'superagent'
import { baseApiUrl as baseUrl } from '../config'

// this function needs to bes set after the get/etc request to allow auth
function authorizeUser () {
  return {
    Accept: 'application/json',
    Authorization: `Bearer ${getEncodedToken()}`
  }
}

export function sendRegistrationEmail (email) {
  return request
    .post('/api/v1/sendRegistrationEmail')
    .set(authorizeUser())
    .send({ email })
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

export function sendReminderEmail (email) {
  return request
    .post('/api/v1/sendReminderEmail')
    .set(authorizeUser())
    .send({ email })
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

export function addNewUserInfo (info) {
  return request
    .patch('/api/v1/auth')
    .set(authorizeUser())
    .send(info)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

export function getUserInfo () {
  return request
    .post('/api/v1/auth')
    .set(authorizeUser())
    .then((res) => res.body)
    .catch((err) => {
      if (err.status === undefined) {
        return { id: '', username: '' }
      }

      throw Error('api error')
    })
}

export function updateEmail (info) {
  return request
    .patch('/api/v1/updateEmail')
    .set(authorizeUser())
    .send(info)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}

// Added - testing

const errorMessages = {
  USERNAME_UNAVAILABLE: 'Sorry, that username is taken.',
  INVALID_CREDENTIALS: 'Sorry, your username or password is incorrect.'
}

export function register (creds) {
  return authRegister(creds, { baseUrl })
    .catch(err => {
      throw errorMessages[err.response.body.errorType]
    })
}

export function login (creds) {
  return authLogin(creds, { baseUrl })
    .catch(err => {
      throw errorMessages[err.response.body.errorType]
    })
}
