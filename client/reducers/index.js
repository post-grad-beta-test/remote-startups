import { combineReducers } from 'redux'
import createUser from './createUser'
import currentPage from './currentPage'
import setEvents from './setEvents'

const reducers = combineReducers({
  currentPage,
  createUser,
  setEvents
})

export default reducers
