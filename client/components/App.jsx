import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { controlNavState } from './helpers'
import { Home, Nav, Login, Register, UserTabs } from '../components'

const App = ({ dispatch, currentPage }) => {
  useEffect(() => controlNavState(dispatch), [])

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

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
