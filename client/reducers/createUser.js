import { ADD_USER_INFO } from '../actions'

const InitialUserInfo = {
  id: '',
  username: ''
}

function createUser (state = InitialUserInfo, action) {
  switch (action.type) {
    case ADD_USER_INFO:
      return action.username
    default:
      return state
  }
}

export default createUser
