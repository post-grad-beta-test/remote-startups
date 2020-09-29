import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Grommet } from 'grommet'
import theme from './theme'
import App from './components/App'


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
