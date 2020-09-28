import { Box, Button, Form, FormField, Image, Select, Tab, TextInput } from 'grommet'
import { User } from 'grommet-icons'
import React from 'react'
import { connect } from 'react-redux'
import { addUserInfo } from '../actions'
import { getUserInfo } from '../api'


function UserProfile({ dispatch, user }) {
  getUserInfo()
    .then(userInfo => {
      dispatch(addUserInfo(userInfo))
    })

  return (
    <Tab title="Profile" icon={<User />} plain={false} reverse={false}>
      <Box align="center" justify="center" pad="xlarge">
        <Form>
          <FormField label="Profile Picture">
            <Image src="https://picsum.photos/200" />
          </FormField>
          <FormField label="email">
            <TextInput placeholder={user.email} />
          </FormField>
          <FormField label="Username">
            <TextInput placeholder={user.username} />
          </FormField>
          <FormField label="First Name">
            <TextInput placeholder={user.first_name} />
          </FormField>
          <FormField label="Last Name">
            <TextInput placeholder={user.last_name} />
          </FormField>
          <FormField label="My Interests">
            <Select options={['ACCOUNTING', 'AGRICULTURAL SCIENCE', 'APPLIED SCIENCES', 'ARCHITECTURE', 'BANKING & FINANCE', 'BIOCHEMISTRY', 'BUSINESS ADMINISTRATION & MANAGEMENT', 'CHEMISTRY', 'CHEMICAL ENGINEERING', 'CIVIL ENGINEERING', 'COMMUNITY', 'COMMUNICATION', 'COMPUTER ENGINEERING', 'COMPUTER SCIENCE', 'CRIMINOLOGY', 'ECONOMICS', 'EDUCATION', 'ELECTRICAL & ELECTRONICS ENGINEERING', 'ENGINEERING', 'ENGLISH LANGUAGE & LITERATURE', 'ENTREPRENEURSHIP', 'ENVIRONMENTAL DESIGN', 'ENVIRONMENTAL SCIENCE', 'ESTATE MANAGEMENT', 'FRENCH', 'GARDENING', 'GAMING', 'GEOLOGY', 'HISTORY', 'HUMAN RESOURCE MANAGEMENT', 'INSURANCE', 'INTERNATIONAL RELATIONS', 'LAW', 'LIBRARY SCIENCE', 'LINGUISTICS & COMMUNICATION', 'MARKETING', 'MASS COMMUNICATION', 'MATHEMATICS', 'MECHANICAL ENGINEERING', 'MEDICAL & HEALTH SCIENCE', 'MICROBIOLOGY', 'NURSING', 'OFFICE TECHNOLOGY MANAGEMENT', 'PERMACULTURE', 'PHARMACEUTICAL SCIENCES', 'PHILOSOPHY', 'PHYSICS', 'POLITICAL SCIENCE', 'PROJECT MANAGEMENT', 'PSYCHOLOGY', 'PUBLIC ADMINISTRATION', 'PUBLIC HEALTH', 'PURCHASING & SUPPLY CHAIN MANAGEMENT', 'QUANTITY SURVEY', 'SCIENCE LABORATORY TECHNOLOGY', 'SOCIOLOGY', 'STATISTICS', 'SUSTAINABILITY', 'TECHNOLOGY', 'THEATRE ARTS', 'THEOLOGY & BIBLICAL STUDIES', 'URBAN & REGIONAL PLANNING', 'VETERINARY MEDICINE']} multiple searchPlaceholder="Search Interests" />
          </FormField>
          <Button label="Submit Changes" type="submit" active={false} hoverIndicator onClick={() => push('/userdashboard')} />
        </Form>
      </Box>
    </Tab>
  )
}

function mapStateToProps(state) {
  return {
    user: state.addUserInfo
  }
}

export default connect(mapStateToProps)(UserProfile)