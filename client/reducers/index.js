import { combineReducers } from 'redux'
import createUser from './createUser'
import currentPage from './currentPage'

const reducers = combineReducers({
  currentPage,
  createUser
})

export default reducers
