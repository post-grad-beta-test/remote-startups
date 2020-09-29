/* eslint-disable promise/always-return */
import request from 'supertest'
import server from '../server'
const { saveNewEvent, getAllEvents } = require('../Db/projectDb')

jest.mock('../Db/projectDb', () => ({
  saveNewEvent: jest.fn(),
  getAllEvents: jest.fn()
}))

test('POST /api/v1/events/:id', () => {
  const id = 1
  saveNewEvent.mockImplementation(() => Promise.resolve({ name: 'the Event', description: 'a description' }))
  return request(server)
    .post(`/api/v1/events/${id}`)
    .send({ name: 'the Event', description: 'a description' })
    .expect(201)
    .then(res => {
      console.log(res)
      expect(res.body.name).toBe('the Event')
      expect(res.body.description).toBe('a description')
    })
})

test('GET /api/v1/events', () => {
  getAllEvents.mockImplementation(() => Promise.resolve([
    { id: 1, name: 'event', description: 'the description', user_id: 2 },
    { id: 2, name: 'organise something', description: 'test something', user_id: 3 } ]))
  return request(server)
    .get('/api/v1/events')
    .then(res => {
      expect(200)
      expect(res.body[0].name).toBe('event')
      expect(res.body[1].description).toBe('test something')
    })
})
