const knex = require('knex')
const config = require('../knexfile').test

const db = require('./db')

const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('userExists checks if email is already in the db', () => {
    test('Check function returns TRUE if email exists', () => {
        return db.userExists('starke.aidan@gmail.com', testDb)
            .then((result) => {
                expect(result).toBe(true)
            })
    })

    test('Check function returns FALSE if email doesn\'t exist', () => {
        return db.userExists('fake@mail.com', testDb)
            .then((result) => {
                expect(result).toBe(false)
            })
    })
})

test('saveNewUser creates a new entry in the db', () => {
    const user = { username: 'new1@gmail.com', password: 'test' }
    return db.saveNewUser(user, testDb)
        .then(() => {
            return db.getUserByName(user.username, testDb)
                .then(res => {
                    expect(res.username).toBe('new1@gmail.com')
                })
        })
})

test('getUserByName gets the user using the email address', () => {
    const email = 'starke.aidan@gmail.com'
    return db.getUserByName(email, testDb)
        .then(res => {
            expect(res.username).toBe(email)
        })
})
