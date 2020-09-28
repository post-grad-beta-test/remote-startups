const knex = require('knex')
const config = require('../knexfile').test

const db = require('./db')

const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
// afterAll(() => testDb.destroy())

describe('userExists checks if email is already in the db', () => {
  test('Check function returns TRUE if email exists', () => {
    return db.userExists('aidanS', testDb)
      .then((result) => {
        expect(result).toBe(true)
      })
  })

  test('Check function returns FALSE if email doesn\'t exist', () => {
    return db.userExists('fakeUser', testDb)
      .then((result) => {
        expect(result).toBe(false)
      })
  })
})

test('saveNewUser creates a new entry in the db', () => {
  const user = { username: 'testPerson', password: 'test' }
  return db.saveNewUser(user, testDb)
    .then(() => {
      return db.getUserByName(user.username, testDb)
        .then(res => {
          expect(res.username).toBe('testPerson')
        })
    })
})

test('getUserByName gets the user using the email address', () => {
  const username = 'aidanS'
  return db.getUserByName(username, testDb)
    .then(res => {
      expect(res.username).toBe(username)
    })
})
