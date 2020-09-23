/* eslint-disable promise/always-return */
import { send } from '@sendgrid/mail'
import request from 'supertest'
import { getUserByName } from '../db'
import server from '../server'

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn()
}))

jest.mock('../db', () => ({
  getUserByName: jest.fn(),
  userExists: () => true
}))

test('GET /api/v1/auth', () => {
  getUserByName.mockImplementation(() => Promise.resolve({ id: 1, email: 'test@gmail.com' }))
  return request(server)
    .get('/api/v1/auth')
    .then(res => {
      expect(res.body.id).toBe(1)
    })
})

describe('emails', () => {
  test('POST api/v1/sendRegistrationEmail calls sgMail.send()', () => {
    send.mockImplementation(() => Promise.resolve({ email: 'test@mail.com' }))
    expect.assertions(1)
    return request(server)
      .post('/api/v1/sendRegistrationEmail')
      .send({ email: 'test@mail.com' })
      .expect(201)
      .then(res => {
        expect(res.body.email).toBe('test@mail.com')
      })
  })

  test('POST api/v1/sendReminderEmail calls sgMail.send()', () => {
    send.mockImplementation(() => Promise.resolve({ email: 'test@mail.com' }))
    expect.assertions(1)
    return request(server)
      .post('/api/v1/sendReminderEmail')
      .send({ email: 'test@mail.com' })
      .expect(201)
      .then(res => {
        expect(res.body.email).toBe('test@mail.com')
      })
  })
})
