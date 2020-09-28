const knex = require('knex')
const config = require('../../knexfile').test

const { saveNewEvent, getAllEvents, deleteEvent, addUserToEvent } = require('../db/projectDb')

const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

const event = {

}

describe('get events', () => {
  test('get all events', () => {
    expect.assertions(3)
    return getAllEvents(testDb)
      .then((events) => {
        expect(events).toHaveLength(3)
        expect(events[0].name).toBe('Remote Startups')
        expect(events[1].description).toBe('this is an event')
        return null
      })
  })
})

describe('add an event', () => {
  test('add new event to db', () => {
    return saveNewEvent(2, { eventName: 'an event',
      description: 'this is an event yo' }, testDb)
      .then((newEvents) => {
        expect(newEvents).toHaveLength(1)
        expect(newEvents[0]).toBe(4)
        return getAllEvents(testDb)
          .then(moreEvents => {
            console.log(moreEvents)
            expect(moreEvents).toHaveLength(4)
            expect(moreEvents[3].name).toBe('an event')
            return null
          })
      })
  })

  describe('you can delete an event', () => {
    test('delete an event from the db', () => {
      return deleteEvent(1, testDb)
        .then(deletedEvents => {
          expect(deletedEvents).toBe(1)
          return getAllEvents(testDb)
        })
        .then(events => {
          expect(events).toHaveLength(2)
          return null
        })
    })
  })
})

describe('add entries to users_projects table', () => {
  test('add user and event entry to table', () => {
    return addUserToEvent(3, 2, testDb)
      .then(entries => {
        expect(entries).toHaveLength(1)
      })
  })
})
