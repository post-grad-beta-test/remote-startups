import * as actions from './index'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureStore(middleware)

test('changePage returns page', () => {
  const action = actions.changePage('test')
  expect(action.type).toBe(actions.CHANGE_PAGE)
  expect(action.page).toEqual('test')
})

test('addUserInfo returns user info', () => {
  const action = actions.addUserInfo({ username: 'test' })
  expect(action.type).toBe(actions.ADD_USER_INFO)
  expect(action.username).toEqual({ username: 'test' })
})

test('dispatches api request', () => {
  const store = mockStore([])
  const dispActions = store.getActions()
  return store.dispatch(actions.loadAllEvents()).then((result) => {
    expect(dispActions[0]).toEqual({ type: 'SET_EVENTS' })
  })
})
