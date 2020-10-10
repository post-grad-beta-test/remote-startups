const knex = require('knex')
const config = require('../../knexfile').test

const {
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getEventsForUser,
  getUsersForEvent,
} = require('../db/projectDb')

const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('get events', () => {
  test('get all events', () => {
    expect.assertions(3)
    return getAllEvents(testDb).then((events) => {
      expect(events).toHaveLength(3)
      expect(events[0].name).toBe('Remote Startups')
      expect(events[1].description).toBe(
        'Shopping list based on selected recipes for tea time'
      )
      return null
    })
  })
})

describe('add an event', () => {
  test('add new event to db', () => {
    return saveNewEvent(
      2,
      {
        name: 'an event',
        description: 'this is an event yo',
        topic: 'TECHNOLOGY',
        date_start: '20/11/20',
        date_end: '24/11/20',
      },
      testDb
    ).then((newEvents) => {
      expect(newEvents).toHaveLength(1)
      expect(newEvents[0]).toBe(4)
      return getAllEvents(testDb).then((moreEvents) => {
        expect(moreEvents).toHaveLength(4)
        expect(moreEvents[3].name).toBe('an event')
        return null
      })
    })
  })

  describe('you can delete an event', () => {
    test('delete an event from the db', () => {
      return deleteEvent(1, testDb)
        .then((deletedEvents) => {
          expect(deletedEvents).toBe(1)
          return getAllEvents(testDb)
        })
        .then((events) => {
          expect(events).toHaveLength(2)
          return null
        })
    })
  })
})

describe('add entries to users_projects table', () => {
  test('add user and event entry to table', () => {
    return addUserToEvent(3, 2, testDb).then((entries) => {
      expect(entries).toHaveLength(1)
    })
  })
})

describe('get events for users', () => {
  test('return a list with name and dates for user', () => {
    return getEventsForUser(1, testDb).then((events) => {
      expect(events).toHaveLength(3)
      expect(events[0][0].name).toBe('Remote Startups')
      expect(events[1][0].topic).toBe('FOOD')
      expect(events[2][0].date_start).toBe('23/09/20')
    })
  })
})

describe('get users for events', () => {
  test('get list of users attending event', () => {
    return getUsersForEvent(1, testDb).then((users) => {
      expect(users).toHaveLength(2)
      console.log(users)
      expect(users[0][0].username).toBe('aidanS')
    })
  })
})
