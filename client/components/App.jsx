import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Login from './Login'
import NavHeader from './Nav'
import Register from './Register'
import UserTabs from './UserTabs'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const App = ({ currentPage }) => {
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
