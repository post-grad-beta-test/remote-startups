import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { CHANGE_PAGE } from '../actions'
import store from '../store'
import Register from './Register'

jest.spyOn(store, 'dispatch')

test.skip('Page renders the login component when login is clicked', () => {
  expect.assertions(2)
  render(<Provider store={store}><Register /></Provider>)
  const link = screen.getByRole('login')
  fireEvent.click(link)
  expect(store.dispatch).toHaveBeenCalled()
  expect(store.dispatch.mock.calls[0][0].type).toEqual(CHANGE_PAGE)
})

describe('sign-in', () => {
  describe('with valid inputs', () => {
    test('inputs render with labels', () => {
      render(<Provider store={store}><Register /></Provider>)
      const input = screen.getByRole('textbox', { name: /firstName/i })
      expect(input[0]).toHaveFormValues()
    })
  })
})
