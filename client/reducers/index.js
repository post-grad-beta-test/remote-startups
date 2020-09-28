import { combineReducers } from 'redux'
import createUser from './createUser'
import currentPage from './currentPage'
import navState from './navState'

const reducers = combineReducers({
  currentPage,
  createUser,
  navState
})

export default reducers
