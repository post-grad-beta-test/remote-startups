import React from 'react'
import { screen, fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Register from './Register'
import store from '../store'
import { CHANGE_PAGE } from '../actions'

jest.spyOn(store, 'dispatch')

test('Page renders the login component when login is clicked', () => {
  expect.assertions(2)
  render(<Provider store={store}><Register /></Provider>)
  const link = screen.getByRole('login')
  fireEvent.click(link)
  expect(store.dispatch).toHaveBeenCalled()
  expect(store.dispatch.mock.calls[0][0].type).toEqual(CHANGE_PAGE)
})