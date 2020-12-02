import { joinEvent, showAllEvents } from '../api/eventsApi'

export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ADD_USER_INFO = 'ADD_USER_INFO'
export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'
export const SET_EVENTS = 'SET_EVENTS'
export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS'

export function changePage (page) {
  return {
    type: CHANGE_PAGE,
    page
  }
}

export function addUserInfo (username) {
  return {
    type: ADD_USER_INFO,
    username
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

export function displayUsersEvents () {
  return (dispatch) => {
    return joinEvent().then()
  }
}
