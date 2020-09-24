import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Nav from './Nav'
import Login from './Login'
import Register from './Register'
import {Card} from './Card'



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

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
