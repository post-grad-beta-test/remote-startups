import { isAuthenticated } from 'authenticare/client/auth'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addUserInfo, changeNavState } from '../actions'
import { getUserInfo } from '../api'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

//you might want to try putting an index.js file in components so you can do things like
// import {Home, Login //etc} from './'
//and get these imports down to one line
import Home from './Home'
import Login from './Login'
import Nav from './Nav'
import Register from './Register'
import UserTabs from './UserTabs'

const App = ({ dispatch, currentPage }) => {
  //personally I would extract the callback passed to useEffect into a separate utils file
  // it would reduce the amount of imports in this file and only need to have dispatch passed to it
  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(changeNavState('Logged In'))
      getUserInfo()
        .then(userInfo => dispatch(addUserInfo({ username: userInfo.username })))
    } else dispatch(changeNavState('Logged Off'))
  }, [])

  return (
    <>
      <Nav />
      <IfNotAuthenticated>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Login' && <Login />}
        {currentPage === 'Register' && <Register />}
      </IfNotAuthenticated>
      <IfAuthenticated>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'User' && <UserTabs />}
      </IfAuthenticated>
    </>
  )
}
function mapStateToProps (state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
