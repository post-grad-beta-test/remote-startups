import { SET_EVENTS } from '../actions'

export function setEvents (state = [], action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.events

    default:
      return state
  }
}
