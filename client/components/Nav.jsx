import React from "react";
import { isAuthenticated } from "authenticare/client";
import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated";
import LoggedIn from "./LoggedIn";
import LoggedOff from "./LoggedOff";
import { Home, Login, Register, UserTabs } from '../components'

//if using authenticated here then current page needs to be linked up

function Nav() {
  return (
    <>
      <IfNotAuthenticated>
        {currentPage === "Home" && <Home />}
        {currentPage === "Login" && <Login />}
        {currentPage === "Register" && <Register />}
      </IfNotAuthenticated>
      <IfAuthenticated>
        {currentPage === "Home" && <Home />}
        {currentPage === "User" && <UserTabs />}
      </IfAuthenticated>
      {isAuthenticated() && <LoggedIn />}
      {!isAuthenticated() && <LoggedOff />}
    </>
  );
}

export default Nav;
