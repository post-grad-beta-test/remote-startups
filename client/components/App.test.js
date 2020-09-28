import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import App from './App'

test.skip('displays heading', () => {
  render(<Provider store={store}><App /></Provider>)
  const heading = screen.getByRole('heading')

  expect(heading.innerHTML).toMatch(/Coject/)
})
