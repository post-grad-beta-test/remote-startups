import { SET_JOINED, SET_LOADING } from '../actions'

const initialState = {
  loading: false,
  failed: false
}

export function setDataLoading (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.loading

    default:
      return state
  }
}

export function setJoinEvent (state = [], action) {
  switch (action.type) {
    case SET_JOINED:
      return action.eventIds

    default:
      return state
  }
}
