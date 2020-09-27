import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Login from './Login'
import Nav from './Nav'
import Register from './Register'
import UserTabs from './UserTabs'
const theme = {
  global: {
    font: {
      family: 'Raleway',
      size: '18px',
      height: '20px'
    },
    colors: {
      blue: '#00C8FF',
      green: '#17EBA0',
      teal: '#82FFF2',
      purple: '#F740FF',
      red: '#FC6161',
      orange: '#FFBC44',
      yellow: '#FFEB59'
    }
  },
  card: {
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF27'
    }
  }
}

const App = ({ currentPage }) => {
  return (
    <Grommet theme={theme}>
      <NavHeader />
      <UserTabs />
      <Home />
      <Box Box fill align="center" justify="center">
        <Box>
          <WorldMap color="#173F5F" opacity="0.8" />
        </Box>
        <Box pad="medium">
          <Heading size="large">Co-ject!</Heading>
          <Text size="xlarge" color='accent-5'>An online collaboration space</Text>
        </Box>
        <Register />
        {/* {currentPage === 'Home' && <div>Success! </div>} */}
      </Box>
    </Grommet>
  )
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
