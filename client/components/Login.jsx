/* eslint-disable promise/always-return */
import { isAuthenticated, signIn } from 'authenticare/client'
import { Form, TextInput, Button, Box } from 'grommet'
import React from 'react'
import { addUserInfo, changeNavState, changePage } from '../actions'
import { getUserInfo } from '../api'
import { baseApiUrl as baseUrl } from '../config'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

function Login() {
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm({
    // resolver: yupResolver(schema)
  })

  const onSubmit = values => {
    const { username, password } = values
    signIn({ username, password }, { baseUrl })
      .then(token => {
        if (isAuthenticated()) {
          dispatch(changePage('User'))
          dispatch(changeNavState('Logged In'))
          return getUserInfo()
        }
        else alert('incorrect email or password')
      })
      .then(userInfo => dispatch(addUserInfo({ userInfo })))
      .catch(err => alert(err.message + ': Incorrect email or password, please try again'))
  }

  return (
    <Box align='center' pad='large' >
      <Form pad="small" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='username' name='username'>Username
          <Controller as={TextInput} control={control} name='username' defaultValue="" type='text' />
        </label>
        <label htmlFor='password' name='password'>Password
          <Controller as={TextInput} control={control} name='password' defaultValue="" type='password' />
        </label>
        <Button type='submit' value='Submit' label='Submit' />
      </Form>
    </Box>)
}

export default Login
