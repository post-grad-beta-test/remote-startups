import { getUserTokenInfo, isAuthenticated, removeUser } from '../auth'
import { login, register } from '../api'
// why is it api and not apis like the others?

export function requestLogin () {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export function loginError (message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser (creds, confirmSuccess) {
  return (dispatch) => {
    let mounted = true
    dispatch(requestLogin())
    return login(creds)
      .then((userInfo) => {
        // this is causing an async issue? seems fixed with the if
        if (mounted) {
          dispatch(receiveLogin(userInfo))
          confirmSuccess()
        }
        return () => (mounted = false)
      })
      .catch((err) => {
        dispatch(loginError(err))
      })
  }
}

export function requestLogout () {
  return {
    type: 'LOGOUT_REQUEST',
    isFetching: true,
    isAuthenticated: true
  }
}

export function receiveLogout () {
  return {
    type: 'LOGOUT_SUCCESS',
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser (confirmSuccess) {
  return (dispatch) => {
    dispatch(requestLogout())
    removeUser()
    dispatch(receiveLogout())
    confirmSuccess()
  }
}

export function registerUserRequest (creds, confirmSuccess) {
  return (dispatch) => {
    let mounted = true
    register(creds)
      // this needs to not be a .then // fixed?
      .then((userInfo) => {
        if (mounted) {
          dispatch(receiveLogin(userInfo))
          confirmSuccess()
        }
        return () => (mounted = false)
      })
      .catch((err) => dispatch(loginError(err)))
  }
}

export function checkAuth (confirmSuccess) {
  return (dispatch) => {
    if (isAuthenticated()) {
      dispatch(receiveLogin(getUserTokenInfo()))
      confirmSuccess()
    }
  }
}
