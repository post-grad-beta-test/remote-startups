import React from "react";
// NO HashRouter! BrowserRouter?
import { Route } from "react-router-dom";
import Homepage from "./Home"; 
import CreateProject from "./CreateProject";
import Events from "./Events";
import Login from "./Login";
import Register from "./Register";
import UserProfile from "./UserProfile";
// import MyEvents from "./MyEvents"; <-- dead link rn
// import Logoff from "./Logoff"; <-- also dead link

// to come back tooooo
//do you want caps or not. 
//Do you want links, 
//where should these be connected too
const Routes = () => {
  return (
    <>
        <Route exact path="/" component={Homepage} />
        <Route path="/CreateProject" component={CreateProject} />
        <Route path="/Events" component={Events} />
        <Route path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path="/UserProfile/:id" component={UserProfile} />
        {/* <Route exact path="/MyEvents" component={MyEvents} />
        <Route exact path="/Logoff" component={Logoff} /> */}
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
