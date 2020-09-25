import { Anchor, Box, Header, Menu, Nav, ResponsiveContext } from 'grommet'
import React from 'react'

function NavHeader () {
  return (
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
          Coject - Yourself, With Others
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Go Places"
              items={[
                { label: 'Log In', onClick: () => {} },
                { label: 'Register', onClick: () => {} }
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="#" label="Log In" />
              <Anchor href="#" label="Register" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>

  )
}

export default NavHeader
