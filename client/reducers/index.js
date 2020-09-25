import { combineReducers } from 'redux'
import currentPage from './currentPage'
import addUserInfo from './addUserInfo'
import navState from './navState'

const reducers = combineReducers({
  currentPage,
  addUserInfo,
  navState
})

export default reducers
