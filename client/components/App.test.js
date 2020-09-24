import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import store from '../store'

import App from './App'

test('displays heading', () => {
  render(<Provider store={store}><App /></Provider>)
  const heading = screen.getByRole('heading')

  expect(heading.innerHTML).toMatch(/Coject/)
})