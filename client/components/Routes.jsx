import React from "react";
// is HashRouter the RIGHT Router?
import { HashRouter as Router, Route } from "react-router-dom";
import Homepage from "./Home";
import Register from "./Register";
import Login from "./Login";
import UserProfile from "./UserProfile";
import Events from "./Events";
import CreateProject from "./CreateProject";
// import MyEvents from "./MyEvents"; <-- dead link rn
// import Logoff from "./Logoff"; <-- also dead link


const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/Homepage" component={Homepage} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/Events" component={Events} />
        <Route path="/CreateProject" component={CreateProject} />
        {/* <Route path="/MyEvents" component={MyEvents} /> */}
        {/* <Route path="/Logoff" component={Logoff} /> */}
      </Router>
    </>
  );
};

export default Routes;

// As a user, I want the URL to change when I navigate to different pages, so that I can bookmark and deeplink different parts of the application.

// Tip: This can be accomplished by integrating react-router, or bringing in a static site generator (a la JAM Stack).
// Tip Tip: If you go the SSG route, it may be useful to do a time-boxed spike to gauge how long it will take / how difficult it will be.
// Tip: It may be necessary to refactor the app so that it doesn't use redux to manage the current page.
// Acceptance Criteria
// Whenever the user navigates to a different page on the site, the URL in the address bar should change.

// List of pages:

// Homepage
// Register
// Login
// Profile
// Events
// Create Project
// My Events (see #13 ).
// Logoff