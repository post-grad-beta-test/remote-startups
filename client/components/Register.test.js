import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Register from './Register'

describe('register', () => {
  test('check you can enter a first name', () => {
    render(<Provider store={store}><Register /></Provider>)
    const formInput = screen.getByRole('textbox', { name: 'First Name' })
    userEvent.type(formInput, 'Bob')
    expect(formInput).toHaveValue('Bob')
  })

  test('accepts email input', () => {
    render(<Provider store={store}> <Register/></Provider>)
    const emailInput = screen.getByRole('textbox', { name: 'Email' })
    userEvent.type(emailInput, 'test@test.com')
    expect(emailInput).toHaveValue('test@test.com')
  })

  test('password field is in the document', () => {
    render(<Provider store={store}> <Register/></Provider>)
    const passwordInput = screen.getByLabelText('Password')
    expect(passwordInput).toBeInTheDocument()
  })

  test('confirm password field is in the document', () => {
    render(<Provider store={store}> <Register/></Provider>)
    const confirmInput = screen.getByLabelText('Confirm Password')
    expect(confirmInput).toBeInTheDocument()
  })
})
