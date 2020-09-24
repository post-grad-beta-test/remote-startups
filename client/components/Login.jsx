/* eslint-disable promise/always-return */
import { isAuthenticated, signIn } from 'authenticare/client'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUserInfo, changePage } from '../actions'
import { getUserInfo } from '../api'
import { baseApiUrl as baseUrl } from '../config'
import { Form, FormField, TextInput } from 'grommet'

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
          return getUserInfo(username)
        }
      })
      .then(res => {
        dispatch(addUserInfo(res))
      })
      .catch(err => alert(err.message + ': Incorrect email or password, please try again'))
  }

  return (
    <Form onSubmit={submitHandler}>
      <FormField label='email' name='email'>
        <TextInput name='email' type='email' onChange={emailHandler} placeholder='example@mail.com' />
      </FormField>
      <FormField label='password' name='password'>
        <TextInput name='password' type='password' onChange={passwordHandler} />
      </FormField>
      <input type='submit' value='Submit' />
    </Form>
  )
}

export default connect()(Login)
