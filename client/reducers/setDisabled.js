import { SET_JOINED, SET_LOADING } from '../actions'

const initialState = {
  eventIDs: [],
  loading: false,
  failed: false
}

export function setJoined (state = initialState, action) {
  switch (action.type) {
    case SET_JOINED:
      return action.eventIds

    case SET_LOADING:
      return action.loading

    default:
      return state
  }
}
