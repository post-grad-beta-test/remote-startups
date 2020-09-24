import { isAuthenticated, register } from 'authenticare/client'
import { Box, Button, Form, FormField, Text, TextInput } from 'grommet'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUserInfo, changePage } from '../actions'
import { getUserInfo, sendRegistrationEmail } from '../api'
import { baseApiUrl as baseUrl } from '../config'

function Register ({ dispatch }) {
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
    <Box width='medium' elevation='medium' pad='medium' >
      <Text size='medium'>Register</Text>
      <Form onSubmit={submitHandler}>
        <FormField label='email' name='email'>
          <TextInput name='email' type='email' onChange={emailHandler} placeholder='example@mail.com' />
        </FormField>
        <FormField label='password' name='password'>
          <TextInput name='password' type='password' onChange={passwordHandler} />
        </FormField>
        <FormField label="confirm-password" name='confirm-password'>
          <TextInput name='confirmPassword' type='password' onChange={confirmPasswordHandler} />
        </FormField>

        <Button type='submit' value='Submit' label='Submit' />
      </Form>
    </Box>
  )
}

export default connect()(Register)
