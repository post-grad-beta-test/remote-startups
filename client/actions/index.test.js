import { addUserInfo, ADD_USER_INFO, changePage, CHANGE_PAGE } from './index'

test('changePage returns page', () => {
  const action = changePage('test')
  expect(action.type).toBe(CHANGE_PAGE)
  expect(action.page).toEqual('test')
})

test('addUserInfo returns user info', () => {
  const action = addUserInfo({ username: 'test' })
  expect(action.type).toBe(ADD_USER_INFO)
  expect(action.username).toEqual({ username: 'test' })
})
