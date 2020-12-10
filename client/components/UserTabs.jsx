import { Tabs } from "grommet";
import React from "react";
import { connect } from "react-redux";
import CreateProject from "./CreateProject";
import Events from "./Events";
import UserProfile from "./UserProfile";

function UserTabs() {
  return (
    <>
      <Tabs justify="end" flex margin="large">
        {/* <Tab label="User Profile"/> */}
          <UserProfile />
        <Events />
        {/* This link breaks the <CreateProject /> */}
        {/* <Link to="/CreateProject"> */}
        <CreateProject />
        {/* </Link> */}
      </Tabs>
    </>
  );
}

export default connect()(UserTabs);
