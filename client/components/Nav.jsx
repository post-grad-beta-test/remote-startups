import { isAuthenticated } from 'authenticare/client'
import React from 'react'
import { connect } from 'react-redux'
import LoggedIn from './LoggedIn'
import LoggedOff from './LoggedOff'

//if only I had a test, my heart would be whole
function Nav({ navState }) {
//isAuthenticated should already tell you if someone is looged in or logged off so you shouldn't need to look at navState
//if you want to force the component to re-render, try passing in the username instead and showing it in the nav
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

export default connect(mapStateToProps)(Nav)
