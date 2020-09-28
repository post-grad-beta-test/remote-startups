import { addUserInfo } from '../actions'
import createUser from './createUser'
test('initial state should be empty', () => {
  let state = createUser(undefined, { id: '', username: '' })
  expect(state.id).toBe('')
})

test('returns userInfo', () => {
  const user = { username: 'bobBuilder' }
  let action = addUserInfo(user)

  let newState = createUser([], action)

  expect(newState).toEqual(user)
})
