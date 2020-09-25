import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import Nav from './Nav'

jest.mock('authenticare/client', () => ({
  isAuthenticated: () => true,
  logOff: jest.fn()
}))

jest.spyOn(store, 'dispatch')

test('dispatch is called when LogOff button is clicked', () => {
  render(<Provider store={store}><Nav /></Provider>)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(store.dispatch).toHaveBeenCalled()
  expect(store.dispatch.mock.calls[0][0].page).toBe('LogIn')
  expect(store.dispatch.mock.calls[0][0].type).toBe('CHANGE_PAGE')
})
