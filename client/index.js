import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Grommet } from 'grommet'
import store from './store'
import App from './components/App'

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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <Grommet theme={theme}>
          <App />
        </Grommet>
      </Provider>
    </Router>,
    document.getElementById('app')
  )
})
