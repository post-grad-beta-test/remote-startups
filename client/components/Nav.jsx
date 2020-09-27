import { isAuthenticated } from 'authenticare/client'
import React from 'react'
import { connect } from 'react-redux'
import LoggedIn from './LoggedIn'
import LoggedOff from './LoggedOff'

function NavHeader ({ navState }) {
  if (isAuthenticated()) {
    return (
      <>
        {navState === 'Logged In' && <LoggedIn />}
      </>
    )
  } else {
    return (
      <>
        {navState === 'Logged Off' && <LoggedOff />}
      </>
    )
  }
}

function mapStateToProps (state) {
  return {
    navState: state.navState
  }
}

export default connect(mapStateToProps)(NavHeader)
