// import React from 'react'
import { isAuthenticated } from 'authenticare/client/auth'
import { changeNavState, addUserInfo } from '../actions'
import { getUserInfo } from '../api'

export function controlNavState(dispatch) {
    if (isAuthenticated()) {
        dispatch(changeNavState('Logged In'))
        getUserInfo()
            .then(userInfo => dispatch(addUserInfo({ username: userInfo.username })))
    } else dispatch(changeNavState('Logged Off'))
}