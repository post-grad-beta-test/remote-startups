import React from 'react'
import { isAuthenticated } from 'authenticare/client'
import LoggedIn from './LoggedIn'
import LoggedOff from './LoggedOff'

function Nav() {
  return (
    <>
        {isAuthenticated() && <LoggedIn />}
        {!isAuthenticated() && <LoggedOff />}
    </>
  );
}

export default Nav

