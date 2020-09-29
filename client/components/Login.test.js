import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Login from './Login'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

test('check you can enter username', () => {
  render(<Provider store={store}><Login /></Provider>)
  const formInput = screen.getByLabelText('Username')
  userEvent.type(formInput, 'Bob')
  expect(formInput).toHaveValue('Bob')
})

test('accepts email input', () => {
  render(<Provider store={store}> <Login /></Provider>)
  const passwordInput = screen.getByLabelText('Password')
  userEvent.type(passwordInput, 'pass')
  expect(passwordInput).toHaveValue('pass')
})
