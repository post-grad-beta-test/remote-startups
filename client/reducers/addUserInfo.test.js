import { ADD_USER_INFO } from '../actions'
import addUserInfo from './addUserInfo'

test('returns userInfo', () => {
    const actual = addUserInfo(undefined, { type: ADD_USER_INFO, userInfo: {info: 'test'} })

    const expected = { info: 'test' }

    expect(actual).toEqual(expected)
})
