import { Box, Button, DateInput, Form, FormField, Image, List, Select, Tab, TextInput } from 'grommet'
import { Aggregate, TableAdd, User } from 'grommet-icons'
import React from 'react'
import { addNewEvent } from '../api/eventsApi'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'


const CreateProject = ({ userId }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (projectData) => {
    console.log(userId)
    addNewEvent(userId, projectData)

      .then(() => {
        (console.log('event added!'))
      })
  }
  return (
    <>
      <Tab title="Create Project" icon={<TableAdd />}>
        <Box align="center" justify="center" pad="xlarge" gap="large" elevation="xlarge" round="small" hoverIndicator={false} flex="grow" direction="column" overflow="visible">
          <Form onSubmit={handleSubmit(onSubmit)}>

            <FormField label="Project Name" name="name">
              <TextInput ref={register} name='name' dafaultValue='' placeholder="Hydroponics in the city" />
            </FormField>

            <FormField label="Description">
              <TextInput ref={register} name='description' dafaultValue='' placeholder="Tell us what you want to collaborate on and why" type="text" plain={false} />
            </FormField>

            <FormField label="Topics" name="Topics">
              <Select options={['ACCOUNTING', 'AGRICULTURAL SCIENCE', 'APPLIED SCIENCES', 'ARCHITECTURE', 'BANKING & FINANCE', 'BIOCHEMISTRY', 'BUSINESS ADMINISTRATION & MANAGEMENT', 'CHEMISTRY', 'CHEMICAL ENGINEERING', 'CIVIL ENGINEERING', 'COMMUNITY', 'COMMUNICATION', 'COMPUTER ENGINEERING', 'COMPUTER SCIENCE', 'CRIMINOLOGY', 'ECONOMICS', 'EDUCATION', 'ELECTRICAL & ELECTRONICS ENGINEERING', 'ENGINEERING', 'ENGLISH LANGUAGE & LITERATURE', 'ENTREPRENEURSHIP', 'ENVIRONMENTAL DESIGN', 'ENVIRONMENTAL SCIENCE', 'ESTATE MANAGEMENT', 'FRENCH', 'GARDENING', 'GAMING', 'GEOLOGY', 'HISTORY', 'HUMAN RESOURCE MANAGEMENT', 'INSURANCE', 'INTERNATIONAL RELATIONS', 'LAW', 'LIBRARY SCIENCE', 'LINGUISTICS & COMMUNICATION', 'MARKETING', 'MASS COMMUNICATION', 'MATHEMATICS', 'MECHANICAL ENGINEERING', 'MEDICAL & HEALTH SCIENCE', 'MICROBIOLOGY', 'NURSING', 'OFFICE TECHNOLOGY MANAGEMENT', 'PERMACULTURE', 'PHARMACEUTICAL SCIENCES', 'PHILOSOPHY', 'PHYSICS', 'POLITICAL SCIENCE', 'PROJECT MANAGEMENT', 'PSYCHOLOGY', 'PUBLIC ADMINISTRATION', 'PUBLIC HEALTH', 'PURCHASING & SUPPLY CHAIN MANAGEMENT', 'QUANTITY SURVEY', 'SCIENCE LABORATORY TECHNOLOGY', 'SOCIOLOGY', 'STATISTICS', 'SUSTAINABILITY', 'TECHNOLOGY', 'THEATRE ARTS', 'THEOLOGY & BIBLICAL STUDIES', 'URBAN & REGIONAL PLANNING', 'VETERINARY MEDICINE']} multiple searchPlaceholder="Search Interests" />
            </FormField>

            <FormField label="Starting">
              <DateInput format="dd/mm/yyyy" />
            </FormField>

            <FormField label="Finishing">
              <DateInput format="dd/mm/yyyy" />
            </FormField>

            <FormField label="Project Image" name="Project Name">
              <Image src="https://picsum.photos/200" />
            </FormField>

            <Button label="Launch Project" type="submit" value='submit' active={false} />
          </Form>
        </Box>
      </Tab>
    </>
  )
}

function mapStateToProps(state) {
  console.log(state)
  return {
    userId: state.createUser.id
  }
}

export default connect(mapStateToProps)(CreateProject)