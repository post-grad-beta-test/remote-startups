import { ADD_USER_INFO } from '../actions'

/**
 * State 'user' object in redux store
 * @typedef {object} userState - createuser state object
 * @property {string} username -  user username
 * @property {string} id - user ud
 *
 */

/** @type {userState}  */
const InitialUserInfo = {
  id: '',
  username: ''
}

/**
 * CreateUser reducer updates userState in Store
 * @param {userState} state - initial  userState object
 * @param {string} action  - add user to state
 * @returns {object} - updated state object
 */
function createUser (state = InitialUserInfo, action) {
  switch (action.type) {
    case ADD_USER_INFO:
      return action.username
    default:
      return state
  }
}

export default createUser
