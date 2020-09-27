import { Box, Tabs, Tab, Form, FormField, Image, TextInput, List, DateInput, Text } from 'grommet'
import { User, Aggregate, TableAdd } from 'grommet-icons'
import React from 'react'

function UserTabs() {
  return (
    <Tabs justify="end" flex margin="large">
      <Tab title="Profile" icon={<User />} plain={false} reverse={false}>
        <Box align="center" justify="center" pad="xlarge">
          <Form>
            <FormField label="Profile Picture">
              <Image src="https://picsum.photos/200" />
            </FormField>
            <FormField label="Email">
              <Text textAlign="start">
                john@gmail.com
          </Text>
            </FormField>
            <FormField label="Username">
              <TextInput placeholder="j0hnnyBoi69" />
            </FormField>
            <FormField label="First Name">
              <TextInput />
            </FormField>
            <FormField label="Last Name">
              <TextInput />
            </FormField>
            <FormField label="My Interests">
              <TextInput placeholder="Surfing, Accounting" suggestions={["ACCOUNTING", "", "AGRICULTURAL SCIENCE", "", "APPLIED SCIENCES", "", "ARCHITECTURE", "", "BANKING & FINANCE", "", "BIOCHEMISTRY", "", "BUSINESS ADMINISTRATION & MANAGEMENT", "", "CHEMISTRY", "", "CHEMICAL ENGINEERING", "", "CIVIL ENGINEERING", "", "COMMUNITY", "", "COMMUNICATION", "", "COMPUTER ENGINEERING", "", "COMPUTER SCIENCE", "", "CRIMINOLOGY", "", "ECONOMICS", "", "EDUCATION", "", "ELECTRICAL & ELECTRONICS ENGINEERING", "", "ENGINEERING", "", "ENGLISH LANGUAGE & LITERATURE", "", "ENTREPRENEURSHIP", "", "ENVIRONMENTAL DESIGN", "", "ENVIRONMENTAL SCIENCE", "", "ESTATE MANAGEMENT", "", "FRENCH", "", "GARDENING", "", "GAMING", "", "GEOLOGY", "", "HISTORY", "", "HUMAN RESOURCE MANAGEMENT", "", "INSURANCE", "", "INTERNATIONAL RELATIONS", "", "LAW", "", "LIBRARY SCIENCE", "", "LINGUISTICS & COMMUNICATION", "", "MASTERS DISSERTATION", "", "MARKETING", "", "MASS COMMUNICATION", "", "MATHEMATICS", "", "MECHANICAL ENGINEERING", "", "MEDICAL & HEALTH SCIENCE", "", "MICROBIOLOGY", "", "NURSING", "", "OFFICE TECHNOLOGY MANAGEMENT", "", "PERMACULTURE", "", "PHARMACEUTICAL SCIENCES", "", "PHILOSOPHY", "", "PHYSICS", "", "POLITICAL SCIENCE", "", "PROJECT MANAGEMENT", "", "PSYCHOLOGY", "", "PUBLIC ADMINISTRATION", "", "PUBLIC HEALTH", "", "PURCHASING & SUPPLY CHAIN MANAGEMENT", "", "QUANTITY SURVEY", "", "SCIENCE LABORATORY TECHNOLOGY", "", "SOCIOLOGY", "", "STATISTICS", "", "SUSTAINABILITY", "", "TECHNOLOGY", "", "THEATRE ARTS", "", "THEOLOGY & BIBLICAL STUDIES", "", "URBAN & REGIONAL PLANNING", "", "VETERINARY MEDICINE", "", "OTHER"]} />
            </FormField>
          </Form>
        </Box>
      </Tab>
      <Tab title="Projects Joined" icon={<Aggregate />}>
        <Box align="center" justify="center" pad="xlarge">
          <List data={[{ "name": "Sustainability Project", "Finishing": "05/10/20" }, { "name": "Communication Tool", "Finishing": "11/10/20" }]} primaryKey="name" secondaryKey="finishing" onClickItem={[{ "screen": 1, "label": "Screen", "key": 1 }]} />
        </Box>
      </Tab>
      <Tab title="Create Project" icon={<TableAdd />}>
        <Box align="center" justify="center" pad="xlarge" gap="large" elevation="xlarge" round="small" hoverIndicator={false} flex="grow" direction="column" overflow="visible">
          <Form>
            <FormField label="Project Name" name="Project Name">
              <TextInput placeholder="How to loose a guy in 10 days" />
            </FormField>
            <FormField label="Description">
              <TextInput placeholder="Tell us what you want to collaborate on and why" type="text" plain={false} />
            </FormField>
            <FormField label="Topics" name="Topics">
              <TextInput placeholder="Choose from the list or create your own" suggestions={["ACCOUNTING", "", "AGRICULTURAL SCIENCE", "", "APPLIED SCIENCES", "", "ARCHITECTURE", "", "BANKING & FINANCE", "", "BIOCHEMISTRY", "", "BUSINESS ADMINISTRATION & MANAGEMENT", "", "CHEMISTRY", "", "CHEMICAL ENGINEERING", "", "CIVIL ENGINEERING", "", "COMMUNITY", "", "COMMUNICATION", "", "COMPUTER ENGINEERING", "", "COMPUTER SCIENCE", "", "CRIMINOLOGY", "", "ECONOMICS", "", "EDUCATION", "", "ELECTRICAL & ELECTRONICS ENGINEERING", "", "ENGINEERING", "", "ENGLISH LANGUAGE & LITERATURE", "", "ENTREPRENEURSHIP", "", "ENVIRONMENTAL DESIGN", "", "ENVIRONMENTAL SCIENCE", "", "ESTATE MANAGEMENT", "", "FRENCH", "", "GARDENING", "", "GAMING", "", "GEOLOGY", "", "HISTORY", "", "HUMAN RESOURCE MANAGEMENT", "", "INSURANCE", "", "INTERNATIONAL RELATIONS", "", "LAW", "", "LIBRARY SCIENCE", "", "LINGUISTICS & COMMUNICATION", "", "MASTERS DISSERTATION", "", "MARKETING", "", "MASS COMMUNICATION", "", "MATHEMATICS", "", "MECHANICAL ENGINEERING", "", "MEDICAL & HEALTH SCIENCE", "", "MICROBIOLOGY", "", "NURSING", "", "OFFICE TECHNOLOGY MANAGEMENT", "", "PERMACULTURE", "", "PHARMACEUTICAL SCIENCES", "", "PHILOSOPHY", "", "PHYSICS", "", "POLITICAL SCIENCE", "", "PROJECT MANAGEMENT", "", "PSYCHOLOGY", "", "PUBLIC ADMINISTRATION", "", "PUBLIC HEALTH", "", "PURCHASING & SUPPLY CHAIN MANAGEMENT", "", "QUANTITY SURVEY", "", "SCIENCE LABORATORY TECHNOLOGY", "", "SOCIOLOGY", "", "STATISTICS", "", "SUSTAINABILITY", "", "TECHNOLOGY", "", "THEATRE ARTS", "", "THEOLOGY & BIBLICAL STUDIES", "", "URBAN & REGIONAL PLANNING", "", "VETERINARY MEDICINE", "", "OTHER"]} type="text" plain={false} />
              <FormField label="Starting Date">
                <DateInput format="dd/mm/yyyy" />
              </FormField>
            </FormField>
            <FormField label="Finished date">
              <DateInput format="dd/mm/yyyy" />
            </FormField>
            <FormField label="Project Image" name="Project Name">
              <Image src="https://picsum.photos/200
" />
            </FormField>
          </Form>
        </Box>
      </Tab>
    </Tabs>
  )
}
export default UserTabs