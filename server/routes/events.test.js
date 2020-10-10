/* eslint-disable comma-dangle */
/* eslint-disable promise/always-return */
import request from 'supertest'
import server from '../server'
const { getTokenDecoder } = require('authenticare/server')
const { saveNewEvent, getAllEvents } = require('../Db/projectDb')

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
}))

jest.mock('../Db/projectDb', () => ({
  saveNewEvent: jest.fn(),
  getAllEvents: jest.fn(),
}))

test('POST /api/v1/events/:id returns 401 if not logged in', () => {
  return request(server).post('/api/v1/events/:id').expect(401)
})

test('DELETE /api/v1/events return 401 if not logged in', () => {
  return request(server).delete('/api/v1/events').expect(401)
})

test.skip('POST /api/v1/events/:id', () => {
  const user = {
    name: 'an event',
    description: 'this is an event yo',
    topic: 'TECHNOLOGY',
    date_start: '20/11/20',
    date_end: '24/11/20',
    image: '012',
  }

  saveNewEvent.mockImplementation(() => Promise.resolve(user))
  return getTestToken(server).then((token) => {
    console.log(token)
    return request(server)
      .post(`/api/v1/events/1`)
      .send(user)
      .then((res) => {
        console.log(res)

        expect(res.body.name).toBe('the Event')
        expect(res.body.description).toBe('this is an event yo')
      })
  })
})
describe('GET /api/v1/events', () => {
  const id = 1
  test('test route is called', () => {
    getAllEvents.mockImplementation(() => Promise.resolve())
    return request(server)
      .get('/api/v1/events')
      .then((res) => {
        expect.assertions(1)
        expect(res.status).toBe(200)
      })
  })
  test('return events accurately', () => {
    getAllEvents.mockImplementation(() =>
      Promise.resolve([
        { id: 1, name: 'event', description: 'the description', user_id: 2 },
        {
          id: 2,
          name: 'organise something',
          description: 'test something',
          user_id: 3,
        },
      ])
    )
    return request(server)
      .get('/api/v1/events')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[0].name).toBe('event')
        expect(res.body[1].name).toBe('organise something')
      })
  })
})
function getTestToken(server) {
  return request(server)
    .post('/api/v1/auth/signup')
    .send({ username: 'jess', password: 'jess' })
    .then((res) => res.body.token)
}
