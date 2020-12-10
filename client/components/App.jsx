import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { controlNavState } from "../helpers";
import { Home, Nav, Login, Register, UserTabs } from "../components";
import Routes from "./Routes";


import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated";

  const App = ({ dispatch, currentPage }) => {
    useEffect(() => controlNavState(dispatch), [])
    return (
      <>
        <Router>
          <Nav />
          <Routes />
        </Router>
      </>
    );
  }
// }

function mapStateToProps(state) {
  return {
    auth: state.auth,
    currentPage: state.currentPage,
  };
}

export default connect(mapStateToProps)(App);


