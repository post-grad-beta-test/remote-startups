import { SET_DISABLED_BTN } from '../actions'

export function setDisabled (state = [], action) {
  switch (action.type) {
    case SET_DISABLED_BTN:
      return action.eventIds

    default:
      return state
  }
}
