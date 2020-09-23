import React, { useState } from 'react'
import { connect } from 'react-redux'
import { isAuthenticated, signIn } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

import { getUserInfo } from '../api/api'
// import { changePage, addUserInfo } from '../actions'

function Login() {
    const [user] = useState({
        username: '',
        password: ''
    })

    const emailHandler = (event) => {
        event.preventDefault()
        user.username = event.target.value
    }

    const passwordHandler = (event) => {
        event.preventDefault()
        user.password = event.target.value
    }

    const submitHandler = event => {
        event.preventDefault()
        const { username, password } = user

        signIn({ username, password }, { baseUrl })
            .then((token) => {
                if (isAuthenticated()) {
                    dispatch(changePage('Home'))
                    return getUserInfo(email)
                }
            })
            .then(res => {
                dispatch(addUserInfo(res))
            })
            .catch(err => alert(err.message + ': Incorrect email or password, please try again'))
    }

    return (
        <>
            Login
            <form onSubmit={submitHandler}>
                <input type='email' onChange={emailHandler} placeholder='example@mail.com' />
                <input type='password' onChange={passwordHandler} />
                <input type='submit' value='Submit' />
            </form>
        </>
    )
}

export default connect()(Login)