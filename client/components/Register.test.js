import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Provider } from 'react-redux'
import { CHANGE_PAGE } from '../actions'
import store from '../store'
import Register from './Register'

jest.spyOn(store, 'dispatch')

const password = 'Testtest1234%'

test.skip('Page renders the login component when login is clicked', () => {
  expect.assertions(2)
  render(<Provider store={store}><Register /></Provider>)
  const link = screen.getByRole('login')
  userEvent.click(link)
  expect(store.dispatch).toHaveBeenCalled()
  expect(store.dispatch.mock.calls[0][0].type).toEqual(CHANGE_PAGE)
})

describe('sign-in', () => {
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
