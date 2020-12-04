import { combineReducers } from 'redux'
import createUser from './createUser'
import currentPage from './currentPage'
import { setEvents } from './setEvents'
import { setDisabled } from './setDisabled'

const reducers = combineReducers({
  currentPage,
  createUser,
  setEvents,
  setDisabled
})

export default reducers
