import { combineReducers } from 'redux'
import currentPage from './currentPage'
import addUserInfo from './addUserInfo'

const reducers = combineReducers({
  currentPage,
  addUserInfo
})

export default reducers
