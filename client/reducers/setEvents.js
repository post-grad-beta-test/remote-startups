import { SET_DISABLED, SET_EVENTS } from '../actions'

export function setEvents (state = [], action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.events
    case SET_DISABLED:
      return state.map((item) => {
        if (item.id === action.eventId) return { ...item, disabled: true }
        else {
          return item
        }
      })

    default:
      return state
  }
}
