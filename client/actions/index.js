import { joinEvent, showAllEvents, showAllUserEvents } from '../api/eventsApi'

export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ADD_USER_INFO = 'ADD_USER_INFO'
export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'
export const SET_EVENTS = 'SET_EVENTS'
export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS'
export const SET_DISABLED_BTN = 'SET_DISABLED_BTN'

export function changePage (page) {
  return {
    type: CHANGE_PAGE,
    page
  }
}

export function addUserInfo (username, id) {
  return {
    type: ADD_USER_INFO,
    username,
    id
  }
}

export function changeNavState (navState) {
  return {
    type: CHANGE_NAV_STATE,
    navState
  }
}

export function setEvents (events) {
  return {
    type: SET_EVENTS,
    events
  }
}

export function setDisabledBtn (eventIds) {
  return {
    type: SET_DISABLED_BTN,
    eventIds
  }
}

export function loadAllEvents () {
  return (dispatch) => {
    // dispatch(setLoading(true))
    return showAllEvents().then((events) => {
      // dispatch(setLoading(false))
      dispatch(setEvents(events))
      return events
    })
    // .catch(err => {
    //    dispatch(setLoading(false))
    //    throw err
    // })
  }
}

export function disableJoinedEvents (userId, eventId) {
  return (dispatch) => {
    // dispatch(setLoading(true))
    return joinEvent(userId, eventId).then(() =>
      // dispatch(setLoading(false))
      showAllUserEvents(userId).then((eventIds) => {
        dispatch(setDisabledBtn(eventIds))
        return eventIds
      })
    )
  }
}
