import { combineReducers } from 'redux'
import createUser from './createUser'
import currentPage from './currentPage'
import { setEvents } from './setEvents'
import { setJoined } from './setDisabled'

const reducer = combineReducers({
  currentPage,
  createUser,
  setEvents,
  setJoined
})

export default reducer
