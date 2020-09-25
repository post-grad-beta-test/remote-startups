import navState from './navState'
import { CHANGE_NAV_STATE } from '../actions'

test('returns page given', () => {
    const actual = navState(undefined, {type: CHANGE_NAV_STATE, navState: 'test'})

    const expected = ('test')

    expect(actual).toMatch(expected)
})
