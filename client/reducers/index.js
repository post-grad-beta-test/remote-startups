import { combineReducers } from 'redux'
import createUser from './createUser'
import currentPage from './currentPage'
import setEvents from './setEvents'

/**
 * combine reducers to add to store
 */

const reducers = combineReducers({
  currentPage,
  createUser,
  setEvents
})

export default reducers
