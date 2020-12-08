import { SET_DISABLED, SET_DISABLED_LOADING } from '../actions'

const initialState = {
  eventIDs: [],
  loading: false,
  success: false,
  failed: false
}

export function setDisabled (state = initialState, action) {
  switch (action.type) {
    case SET_DISABLED:
      return

    case SET_DISABLED_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}
