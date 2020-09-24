import currentPage from './currentPage'
import { changePage } from '../actions'

test('returns page given', () => {
  const actual = currentPage(undefined, changePage('test'))

  const expected = ('test')

  expect(actual).toMatch(expected)
})
