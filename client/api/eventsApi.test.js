import nock from 'nock'
import {
  addNewEvent,
  showAllEvents,
  joinEvent,
  showAllUserEvents
} from './eventsApi'

test('fetches events from server', () => {
  nock(/localhost/)
    .get('/api/v1/events')
    .reply(200, {
      event_id: 1,
      name: 'Test Event',
      description: 'an event description'
    })

  return showAllEvents().then((res) => {
    expect(res.event_id).toEqual(1)
    expect(res.name).toEqual('Test Event')
    return null
  })
})

describe('send a new event to the server', () => {
  const scope = nock(/localhost/)
    .post('/api/v1/events/1')
    .reply(201)
  test('post an event to the server', () => {
    return addNewEvent(1, 'an event', 'a description').then((result) => {
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('user can join an event', () => {
  const scope = nock(/localhost/)
    .post('/api/v1/events/attending')
    .reply(201)

  test('post userID and projectID to server', () => {
    return joinEvent('1', '4').then((result) => {
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('GET all events user is attending', () => {
  const id = 1
  nock(/localhost/)
    .get(`/api/v1/events/${id}/attending`)
    .reply(200, {
      results: [
        {
          project_id: 1
        },
        {
          project_id: 2
        },
        {
          project_id: 3
        }
      ]
    })

  test('get all events by user attending', () => {
    return showAllUserEvents(id).then((res) => {
      expect(res.results).toHaveLength(3)
      expect(res.results[0].project_id).toBe(1)
    })
  })
})
