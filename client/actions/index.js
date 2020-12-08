import * as eventsData from '../api/eventsApi'

export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ADD_USER_INFO = 'ADD_USER_INFO'
export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'
export const SET_EVENTS = 'SET_EVENTS'
export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS'
export const SET_DISABLED = 'SET_DISABLED'
export const SET_DISABLED_LOADING = 'SET_DISABLED_LOADING'

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

export function setDisabled (eventIds) {
  return {
    type: SET_DISABLED,
    eventIds
  }
}

export function setDisabledLoading (loading) {
  return {
    type: SET_DISABLED_LOADING
  }
}

export function loadAllEvents () {
  return (dispatch) => {
    // dispatch(setLoading(true))
    return eventsData.showAllEvents().then((events) => {
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
    return eventsData.joinEvent(userId, eventId).then(() =>
      // dispatch(setLoading(false))
      eventsData.showAllUserEvents(userId).then((eventIds) => {
        dispatch(setDisabled(eventIds))
        return eventIds
      })
    )
  }
}
