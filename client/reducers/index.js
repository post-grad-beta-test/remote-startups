import { combineReducers } from 'redux'
import createUser from './createUser'
import currentPage from './currentPage'
import { setEvents } from './setEvents'
import { setJoinEvent, setDataLoading } from './setDisabled'

const reducer = combineReducers({
  currentPage,
  createUser,
  setEvents,
  setJoinEvent,
  setDataLoading
})

export default reducer
