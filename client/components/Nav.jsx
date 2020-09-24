import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import { Anchor, Box, Header, Menu, Nav, ResponsiveContext } from 'grommet'
import { logOff } from 'authenticare/client/auth'
import { changePage } from '../actions'

function NavHeader({ dispatch }) {
  if (isAuthenticated())
    return (
      <Header background="dark-1" pad="medium">
        <Box direction="row" align="center" gap="small" onClick={() => dispatch(changePage('Home'))} >
          Coject - Yourself, With Others
      </Box>
        <ResponsiveContext.Consumer>
          {responsive =>
            responsive === 'small' ? (
              <Menu
                label="Go Places"
                items={[
                  { label: 'Log Off', onClick: () => logOff() }
                ]}
              />
            ) : (
                <Nav direction="row">
                  <Anchor onClick={() => logOff()} label="Log Off" />
                </Nav>
              )
          }
        </ResponsiveContext.Consumer>
      </Header>
    )

  else return (
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small" onClick={() => dispatch(changePage('Home'))} >
        Coject - Yourself, With Others
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Go Places"
              items={[
                { label: 'Log In', onClick: () => dispatch(changePage('Login')) },
                { label: 'Register', onClick: () => dispatch(changePage('Register')) }
              ]}
            />
          ) : (
              <Nav direction="row">
                <Anchor onClick={() => dispatch(changePage('Login'))} label="Log In" />
                <Anchor onClick={() => dispatch(changePage('Register'))} label="Register" />
              </Nav>
            )
        }
      </ResponsiveContext.Consumer>
    </Header>
  )
}

export default connect()(NavHeader)
