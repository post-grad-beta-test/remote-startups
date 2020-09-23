import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { addUserInfo, changePage } from '../actions'
import { sendRegistrationEmail, getUserInfo } from '../api'
import { register, isAuthenticated } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

function Register({ dispatch }) {
    const [newUser] = useState({})
    const [confirmPassword, setConfirmPassword] = useState('')

    const emailHandler = event => {
        event.preventDefault()
        newUser.username = event.target.value
    }

    const passwordHandler = event => {
        event.preventDefault()
        newUser.password = event.target.value
    }

    const confirmPasswordHandler = event => {
        event.preventDefault()
        setConfirmPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const { username, password } = newUser

        if (password === confirmPassword) {
            register({ username, password }, { baseUrl })
                .then((token) => {
                    if (isAuthenticated()) {
                        sendRegistrationEmail(email)
                        alert('check your inbox')
                        dispatch(changePage('Home'))
                        return getUserInfo(email)
                    } else {
                        alert('Nope')
                    }
                })
                .then(res => {
                    dispatch(addUserInfo(res))
                })
                .catch(err => alert(err.message))
        } else alert('passwords do not match')
    }

    return (
        <>
            Register
            <form onSubmit={submitHandler}>
                <input type='email' onChange={emailHandler} placeholder='example@mail.com' />
                <input type='password' onChange={passwordHandler} />
                <input type='password' onChange={confirmPasswordHandler} />
                <input type='submit' value='Submit' />
            </form>
        </>
    )
}

export default connect()(Register)
