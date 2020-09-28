import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { CHANGE_PAGE } from '../actions'
import store from '../store'
import Login from './Login'

jest.spyOn(store, 'dispatch')

test.skip('Page renders the register component when register is clicked', () => {
  expect.assertions(2)
  render(<Provider store={store}><Login /></Provider>)
  const button = screen.getAllByRole('button')[1]
  fireEvent.click(button)
  expect(store.dispatch).toHaveBeenCalled()
  expect(store.dispatch.mock.calls[0][0].type).toEqual(CHANGE_PAGE)
})
