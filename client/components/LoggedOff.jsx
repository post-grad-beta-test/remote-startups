import { Anchor, Box, Header, Menu, Nav, ResponsiveContext } from "grommet";
import { Home } from "grommet-icons";
import React from "react";
import { connect } from "react-redux";
import { changePage } from "../actions";
import { BrowserRouter as Router, Link } from "react-router-dom";


function LoggedOff({ dispatch }) {
  return (
    <Header background="dark" pad="medium">
      <Box
        direction="row"
        align="center"
        gap="small"
        onClick={() => dispatch(changePage("Home"))}
      >
        <Home />
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === "small" ? (
            <Menu
              label="Go Places"
              items={[
                {
                  label: "Log In",
                  onClick: () => dispatch(changePage("Login")),
                },
                {
                  label: "Register",
                  onClick: () => dispatch(changePage("Register")),
                },
              ]}
            />
          ) : (
            <Nav direction="row">
              <Router>
                <Link to="/Login">
                  <Anchor
                    onClick={() => dispatch(changePage("Login"))}
                    label="Log In"
                  />
                </Link>
                <Link to="/Register">
                  <Anchor
                    onClick={() => dispatch(changePage("Register"))}
                    label="Register"
                  />
                </Link>
              </Router>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
}

export default connect()(LoggedOff);
