import { SET_EVENTS } from '../actions'

/**
 * setEvents reducer the adds the setEvents object to the store
 * @param {object[]} state - array of event objects in state
 * @param {string} action - action to update setEvents array
 */

export default function (state = [], action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.events

    default:
      return state
  }
}
