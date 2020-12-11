import * as eventsData from '../api/eventsApi'

export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ADD_USER_INFO = 'ADD_USER_INFO'
export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'
export const SET_EVENTS = 'SET_EVENTS'
export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS'
export const SET_JOINED = 'SET_JOINED'
export const SET_LOADING = 'SET_LOADING'
export const SET_DISABLED = 'SET_DISABLED'

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

export function setJoined (eventIds) {
  return {
    type: SET_JOINED,
    eventIds
  }
}

export function setLoading (loading) {
  return {
    type: SET_LOADING,
    loading
  }
}

// export function setDisabled (eventId) {
//   return {
//     type: SET_DISABLED,
//     eventId
//   }
// }

/**
 * A thunk that fetches all the events from the database and adds them to the store
 */
export function loadAllEvents () {
  return (dispatch) => {
    // dispatch(setLoading(true))
    return eventsData.showAllEvents().then((events) => {
      // dispatch(setLoading(false))
      // events.map((event) => {
      //   event.disabled = false
      // })
      dispatch(setEvents(events))
      return events
    })
    // .catch(err => {
    //    dispatch(setLoading(false))
    //    throw err
    // })
  }
}

export function attendEvent (userId, eventId) {
  return (dispatch) => {
    dispatch(setLoading(true))
    return eventsData
      .joinEvent(userId, eventId)
      .then(() => dispatch(setLoading(false)))
      .catch((error) => console.log(error))
  }
}

export function fetchEventIds (userId) {
  return (dispatch) => {
    dispatch(setLoading(true))
    return eventsData
      .showAllUserEventIds(userId)
      .then((eventIds) => {
        dispatch(setJoined(eventIds))
        dispatch(setLoading(false))
        return eventIds
      })
      .catch((error) => console.log(error))
  }
}
