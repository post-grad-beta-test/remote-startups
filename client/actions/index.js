export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ADD_USER_INFO = 'ADD_USER_INFO'
export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'

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