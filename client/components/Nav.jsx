import React from 'react'
import { connect } from 'react-redux'
import LoggedIn from './LoggedIn'
import LoggedOff from './LoggedOff'

function Nav({ navState }) {
    return (
      <>
        {navState === 'Logged In' && <LoggedIn />}
        {navState === 'Logged Off' && <LoggedOff />}
      </>
    )
  }

  function mapStateToProps(state) {
    return {
      navState: state.navState
    }
  }

  export default connect(mapStateToProps)(Nav)
