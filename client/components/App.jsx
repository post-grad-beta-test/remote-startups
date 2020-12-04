import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { controlNavState } from "../helpers";
import { Home, Nav, Login, Register, UserTabs } from "../components";
import Routes from "./Routes";


import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated";
//Authentication now managed via Nav.jsx component
// I've also discovered that deleting all that code makes the login function not work.

// export class App extends React.Component {
  const App = ({ dispatch, currentPage }) => {
    useEffect(() => controlNavState(dispatch), [])
  // componentDidMount() {
  //   const confirmSuccess = () => {};
  //   this.props.dispatch(checkAuth(confirmSuccess));
  // }
  // render() {
  //   const { auth } = this.props;
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

//<Link to="/somewhere"/>
//<Link to={location}/>

{
  /* <Router>
<Route path="/" component={Homepage} />
<Route path="/Register" component={Register} />
<Route path="/Login" component={Login} />
<Route path="/UserProfile" component={UserProfile} />
<Route path="/Events" component={Events} />
<Route path="/CreateProject" component={CreateProject} />
<Route path="/MyEvents" component={MyEvents} />
<Route path="/Logoff" component={Logoff} />
</Router> */
}
