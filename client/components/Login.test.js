import React from 'react'
import { screen, fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Login from './Login'
import store from '../store'
import { CHANGE_PAGE } from '../actions'

jest.spyOn(store, 'dispatch')

test('Page renders the register component when register is clicked', () => {
  expect.assertions(2)
  render(<Provider store={store}><Login /></Provider>)
  const button = screen.getAllByRole('button')[1]
  fireEvent.click(button)
  expect(store.dispatch).toHaveBeenCalled()
  expect(store.dispatch.mock.calls[0][0].type).toEqual(CHANGE_PAGE)
})
