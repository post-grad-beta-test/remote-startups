import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import ProjectsJoined from './ProjectsJoined'

test('tab renders title', () => {
  render(<Provider store={store}><ProjectsJoined /></Provider>)
  const tab = screen.getByRole('tab')

  expect(tab.innerHTML).toMatch(/Projects/)
})
