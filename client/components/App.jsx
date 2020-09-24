import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Register from './Register'

const App = ({currentPage }) => {
  return (
    <>
      <Nav />
      <h1>Coject!</h1>
      <Register />

      {currentPage === 'Home' && <div>Success!</div>}
    </>
  )
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
