import * as anAction from './index'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { showAllEvents, joinEvent, showAllUserEventIds } from '../api/eventsApi'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

jest.mock('../api/eventsApi')

test('changePage returns page', () => {
  const action = anAction.changePage('test')
  expect(action.type).toBe(anAction.CHANGE_PAGE)
  expect(action.page).toEqual('test')
})

test('addUserInfo returns user info', () => {
  const action = anAction.addUserInfo({ username: 'test' })
  expect(action.type).toBe(anAction.ADD_USER_INFO)
  expect(action.username).toEqual({ username: 'test' })
})

describe('fetchAllEvents()', () => {
  test('dispatches loading action', () => {
    const event = [{ name: 'test' }]
    const store = mockStore()
    showAllEvents.mockResolvedValue(event)
    const expectedActions = [
      {
        type: anAction.SET_LOADING,
        loading: true
      },
      {
        type: anAction.SET_LOADING,
        loading: false
      },
      {
        type: anAction.SET_EVENTS,
        events: event
      },
      {
        type: anAction.SET_LOADING,
        loading: false
      }
    ]

    return store.dispatch(anAction.loadAllEvents()).then(() => {
      store.subscribe(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
test('dispatches correct actions to join event', () => {
  const store = mockStore({})
  const dispatchActions = store.getActions()
  joinEvent.mockResolvedValue('1')
  return store.dispatch(anAction.attendEvent('2', '3')).then(() => {
    expect(dispatchActions[0].type).toEqual('SET_LOADING')
  })
})

test('dispatches actions to fetch eventIds for userID', () => {
  const joinedIds = [{ id: 2 }, { id: 3 }]
  const store = mockStore({})
  showAllUserEventIds.mockResolvedValue(joinedIds)

  const expectedActions = [
    {
      type: anAction.SET_LOADING,
      loading: true
    },
    {
      type: anAction.SET_JOINED,
      eventIds: joinedIds
    },
    {
      type: anAction.SET_LOADING,
      loading: false
    }
  ]

  return store.dispatch(anAction.fetchEventIds('1')).then(() => {
    store.subscribe(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
