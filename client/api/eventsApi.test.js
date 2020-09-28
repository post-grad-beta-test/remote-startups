import nock from 'nock'
import { addNewEvent, showAllEvents } from './eventsApi'

test('fetches events from server', () => {
  nock(/localhost/)
    .get('/api/v1/events')
    .reply(200, { event_id: 1, name: 'Test Event', description: 'an event description' })

  return showAllEvents()
    .then(res => {
      expect(200)
      expect(res.event_id).toEqual(1)
      expect(res.name).toEqual('Test Event')
    })
})

test('send a new event to the server', () => {
  const scope = nock(/localhost/)
    .post('/api/v1/events/1')
    .reply(200)

  return addNewEvent({ event: 'an event' })
    .then(() => {
      expect(scope).isDone().toBe(true)
      return null
    })
})
