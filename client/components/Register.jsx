/* eslint-disable promise/always-return */
import { yupResolver } from '@hookform/resolvers'
import { isAuthenticated, register } from 'authenticare/client'
import { Box, Button, Form, TextInput, Select } from 'grommet'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { addUserInfo, changeNavState, changePage } from '../actions'
import { sendRegistrationEmail, updateUserInfo } from '../api/api'
import { baseApiUrl as baseUrl } from '../config'

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is a required field')
  // password: yup
  //   .string()
  //   .required('Please enter your password')
  //   .matches(
  //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //     'Password must contain at least 8 characters, one uppercase, one number and one special case character'
  //   ),
  // confirmPassword: yup
  //   .string()
  //   .required('Please confirm your password')
  //   .when('password', {
  //     is: password => (!!(password && password.length > 0)),
  //     then: yup.string().oneOf([yup.ref('password')], "Password doesn't match")
  //   })
})

function Register () {
  const dispatch = useDispatch()
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (values) => {
    const { username, password, email, firstName, lastName } = values
    let image = Math.floor(Math.random() * 100) + 1
    if (image < 10) image = '00' + image
    else if (image < 100 && image > 9) image = '0' + image
    else image = image.toString()
    register({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          sendRegistrationEmail(email)
          alert('check your inbox')
        } else alert('Something went wrong')
      })
      .then(() => {
        updateUserInfo({ username, firstName, lastName, email, image })
        dispatch(addUserInfo({ username }))
        dispatch(changePage('User'))
        dispatch(changeNavState('Logged In'))
      })
      .catch(err => alert(err.message))
  }
  return (
    <Box align='center' pad='large' >
      <Form pad="small" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'> First Name </label>
        <Controller as={TextInput} id='firstName' name="firstName" control={control} defaultValue="" type='text' />

        <label htmlFor='lastName'>Last Name
          <Controller as={TextInput} id="lastName" name="lastName" control={control} defaultValue="" type='text' />
        </label>
        <label htmlFor='username'>username
          <Controller as={TextInput} id="username" name="username" control={control} defaultValue="" />
        </label>
        <label htmlFor='email'>Email
          <Controller as={TextInput} id="email" name="email" control={control} defaultValue="" />
          <p>{errors.email?.message}</p>
        </label>
        <label htmlFor='password'>Password
          <Controller as={TextInput} id="password" name="password" type="password" control={control} defaultValue="" />
          {/* <p>{errors.password?.message}</p> */}
        </label>
        <label htmlFor='confirmPassword'>Confirm Password
          <Controller as={TextInput} id="confirmPassword" name="confirmPassword" type="password" control={control} defaultValue="" />
          {/* <p>{errors.confirmPassword?.message}</p> */}
        </label>
        <Button type='submit' value='Submit' label='Submit' />
      </Form>
    </Box>
  )
}
export default Register
