import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Login from './Login'
import NavHeader from './Nav'
import Register from './Register'
import UserTabs from './UserTabs'

const App = ({ currentPage }) => {
  return (
    <>
      <NavHeader />
      {currentPage === 'Home' && <Home />}
      {currentPage === 'Login' && <Login />}
      {currentPage === 'Register' && <Register />}
      <UserTabs/>
    </>
  )
}
function mapStateToProps (state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
