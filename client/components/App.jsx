import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Login from './Login'
import Nav from './Nav'
import Register from './Register'

const App = ({ currentPage }) => {
  return (
    <>
      <Nav />
      {currentPage === 'Home' && <Home />}
      {currentPage === 'Login' && <Login />}
      {currentPage === 'Register' && <Register />}
    </>
  )
}

function mapStateToProps (state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
