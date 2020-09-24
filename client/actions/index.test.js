import { ADD_USER_INFO, CHANGE_PAGE, changePage, addUserInfo } from './index'

test('changePage returns page', () => {
    const action = changePage('test')
    expect(action.type).toBe(CHANGE_PAGE)
    expect(action.page).toEqual('test')
})

test('addUserInfo returns user info', () => {
    const action = addUserInfo({ username: 'test', firstName: 'te', lastName: 'st' })
    expect(action.type).toBe(ADD_USER_INFO)
    expect(action.userInfo.username).toMatch('test')
    expect(action.userInfo.firstName).toMatch('te')
    expect(action.userInfo.lastName).toMatch('st')
})
