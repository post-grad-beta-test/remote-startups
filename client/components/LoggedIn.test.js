import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import LoggedIn from './LoggedIn'

test('nav displays log off', () => {
  render(<Provider store={store}><LoggedIn /></Provider>)
  const nav = screen.getByRole('navigation')

  expect(nav.innerHTML).toMatch(/Log Off/)
})

test('displays banner text', () => {
  render(<Provider store={store}> <LoggedIn /></Provider>)
  const banner = screen.getByRole('banner')

  expect(banner.innerHTML).toMatch(/Coject - Yourself, With Others/)
  expect(banner.innerHTML).toMatch(/Logged in as/)
})
