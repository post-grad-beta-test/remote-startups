import { combineReducers } from 'redux'
import createUser from './createUser'
import currentPage from './currentPage'
// import eventReducer from '../slices/eventsSlice'
import joinReducer from '../slices/attendingEventSlice'
import setEvents from './setEvents'

const reducers = combineReducers({
  currentPage,
  createUser,
  // eventReducer,
  joinReducer,
  setEvents
})

export default reducers
