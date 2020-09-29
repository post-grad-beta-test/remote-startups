import { Box, Button, Form, FormField, Image, Select, Tab, TextInput } from 'grommet'
import { User } from 'grommet-icons'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { addUserInfo, changePage } from '../actions'
import { getUserInfo, updateEmail } from '../api'

function UserProfile({ dispatch, user }) {
  useEffect(() => {
    getUserInfo()
      .then(userInfo => {
        dispatch(addUserInfo(userInfo))
      })
  }, [])

  const { handleSubmit, control, errors } = useForm({
    // resolver: yupResolver(schema)
  })

  const onSubmit = values => {
    values.username = user.username
    console.log(values)
    updateEmail(values)
      .then(() => getUserInfo())
      .then(userInfo => {
        dispatch(addUserInfo(userInfo))
        alert('saved!')
        dispatch(changePage('Home'))
      })
  }

  return (
    <Tab title="Profile" icon={<User />} plain={false} reverse={false}>
      <Box align="center" justify="center" pad="xlarge">
        <Form pad="small" onSubmit={handleSubmit(onSubmit)}>
          <FormField label="Profile Picture">
            <Image src={`avatar.images/gee_me_${user.image}.svg`} />
          </FormField>
          <h3>{user.firstName} {user.lastName}</h3>
          <br />
          <label htmlFor="email">Update email:
            <Controller as={TextInput} id="email" name="email" control={control} defaultValue="" placeholder={user.email} />
          </label>
          <label htmlFor="interests">Select interests:
            <Select options={['ACCOUNTING', 'AGRICULTURAL SCIENCE', 'APPLIED SCIENCES', 'ARCHITECTURE', 'BANKING & FINANCE', 'BIOCHEMISTRY', 'BUSINESS ADMINISTRATION & MANAGEMENT', 'CHEMISTRY', 'CHEMICAL ENGINEERING', 'CIVIL ENGINEERING', 'COMMUNITY', 'COMMUNICATION', 'COMPUTER ENGINEERING', 'COMPUTER SCIENCE', 'CRIMINOLOGY', 'ECONOMICS', 'EDUCATION', 'ELECTRICAL & ELECTRONICS ENGINEERING', 'ENGINEERING', 'ENGLISH LANGUAGE & LITERATURE', 'ENTREPRENEURSHIP', 'ENVIRONMENTAL DESIGN', 'ENVIRONMENTAL SCIENCE', 'ESTATE MANAGEMENT', 'FRENCH', 'GARDENING', 'GAMING', 'GEOLOGY', 'HISTORY', 'HUMAN RESOURCE MANAGEMENT', 'INSURANCE', 'INTERNATIONAL RELATIONS', 'LAW', 'LIBRARY SCIENCE', 'LINGUISTICS & COMMUNICATION', 'MARKETING', 'MASS COMMUNICATION', 'MATHEMATICS', 'MECHANICAL ENGINEERING', 'MEDICAL & HEALTH SCIENCE', 'MICROBIOLOGY', 'NURSING', 'OFFICE TECHNOLOGY MANAGEMENT', 'PERMACULTURE', 'PHARMACEUTICAL SCIENCES', 'PHILOSOPHY', 'PHYSICS', 'POLITICAL SCIENCE', 'PROJECT MANAGEMENT', 'PSYCHOLOGY', 'PUBLIC ADMINISTRATION', 'PUBLIC HEALTH', 'PURCHASING & SUPPLY CHAIN MANAGEMENT', 'QUANTITY SURVEY', 'SCIENCE LABORATORY TECHNOLOGY', 'SOCIOLOGY', 'STATISTICS', 'SUSTAINABILITY', 'TECHNOLOGY', 'THEATRE ARTS', 'THEOLOGY & BIBLICAL STUDIES', 'URBAN & REGIONAL PLANNING', 'VETERINARY MEDICINE']} multiple searchPlaceholder="Search Interests" />
          </label>
          <Button type='submit' value='Submit' label='Submit' />
        </Form>
      </Box>
    </Tab>
  )
}

function mapStateToProps(state) {
  return {
    user: state.createUser
  }
}

export default connect(mapStateToProps)(UserProfile)