/* eslint-disable promise/always-return */
import request from 'supertest'
import server from '../server'

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn()
}))

test('GET /api/v1/events return 401 if not logged in', () => {
  return request(server)
    .get('/api/v1/events')
    .expect(401)
})

test('POST /api/v1/events/:id returns 401 if not logged in', () => {
  return request(server)
    .get('/api/v1/events/?id=1')
    .expect(401)
})

test('DELETE /api/v1/events return 401 if not logged in', () => {
  return request(server)
    .delete('/api/v1/events')
    .expect(401)
})
