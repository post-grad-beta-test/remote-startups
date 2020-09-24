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
    resolver: yupResolver(schema) }
  )
  const onSubmit = ({ values }) => {
    const { username, password } = values
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
      <FormField label='email' name='email'>
        <Controller as={TextInput} name="email" control={control} defaultValue=""/>
        <p>{errors.email?.message}</p>
      </FormField>
      <FormField label='password' name='password'>
        <Controller as={TextInput} name="password" type="password" control={control} defaultValue=""/>
        <p>{errors.password?.message}</p>
      </FormField>
      <FormField label="confirm-password" name='confirm-password'>
        <Controller as={TextInput} name="confirmPassword" type="password" control={control} defaultValue=""/>
        <p>{errors.confirmPassword?.message}</p>
      </FormField>
      <Button type='submit' value='Submit' label='Submit' />
    </Form>
  )
}
export default Register

// function Register ({ dispatch }) {
//   const [newUser] = useState({})
//   const [confirmPassword, setConfirmPassword] = useState('')

//   const emailHandler = event => {
//     event.preventDefault()
//     newUser.username = event.target.value
//   }

//   const passwordHandler = event => {
//     event.preventDefault()
//     newUser.password = event.target.value
//   }

//   const confirmPasswordHandler = event => {
//     event.preventDefault()
//     setConfirmPassword(event.target.value)
//   }

//   const submitHandler = (event) => {
//     event.preventDefault()
//     const { username, password } = newUser

//     if (password === confirmPassword) {

//   }

//   return (
//     <Box width='medium' elevation='medium' pad='medium' >
//       <Text size='medium'>Register</Text>
//       <Form onSubmit={submitHandler}>
//         <FormField label='email' name='email'>
//           <TextInput name='email' type='email' onChange={emailHandler} placeholder='example@mail.com' />
//         </FormField>
//         <FormField label='password' name='password'>
//           <TextInput name='password' type='password' onChange={passwordHandler} />
//         </FormField>
//         <FormField label="confirm-password" name='confirm-password'>
//           <TextInput name='confirmPassword' type='password' onChange={confirmPasswordHandler} />
//         </FormField>

//         <Button type='submit' value='Submit' label='Submit' />
//       </Form>
//     </Box>
//   )
// }

// export default connect()(Register)
