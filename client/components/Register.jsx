/* eslint-disable promise/always-return */
import { yupResolver } from '@hookform/resolvers'
import { isAuthenticated, register } from 'authenticare/client'
import { Button, Form, FormField, TextInput } from 'grommet'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { addUserInfo, changePage } from '../actions'
import { getUserInfo, sendRegistrationEmail } from '../api'
import { baseApiUrl as baseUrl } from '../config'

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is a required field'),
  password: yup
    .string()
    .required('Please enter your password')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: password => (!!(password && password.length > 0)),
      then: yup.string().oneOf([yup.ref('password')], "Password doesn't match")
    })
})

function Register () {
  const dispatch = useDispatch()
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema)
  }
  )
  const onSubmit = (values) => {
    const { username, password, email } = values
    register({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          sendRegistrationEmail(username)
          alert('check your inbox')
          dispatch(changePage('Home'))
          return getUserInfo(username)
        } else {
          alert('Nope')
        }
      })
      .then(res => {
        dispatch(addUserInfo(res))
      })
      .catch(err => alert(err.message))
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField label='First name' name='firstName'>
        <Controller as={TextInput} name="firstName" control={control} defaultValue=""/>
      </FormField>
      <FormField label='Last name' name='lastName'>
        <Controller as={TextInput} name="lastName" control={control} defaultValue=""/>
      </FormField>
      <FormField label='username' name='username'>
        <Controller as={TextInput} name="username" control={control} defaultValue=""/>
      </FormField>
      <FormField label='email' name='email'>
        <Controller as={TextInput} name="email" control={control} defaultValue="" />
        <p>{errors.email?.message}</p>
      </FormField>
      <FormField label='password' name='password'>
        <Controller as={TextInput} name="password" type="password" control={control} defaultValue="" />
        <p>{errors.password?.message}</p>
      </FormField>
      <FormField label="confirm-password" name='confirm-password'>
        <Controller as={TextInput} name="confirmPassword" type="password" control={control} defaultValue="" />
        <p>{errors.confirmPassword?.message}</p>
      </FormField>
      <Button type='submit' value='Submit' label='Submit' />
    </Form>
  )
}
export default Register
