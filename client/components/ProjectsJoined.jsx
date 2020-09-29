import { Box, Heading, DataTable, Tab } from 'grommet'
import { Aggregate } from 'grommet-icons'
import React from 'react'


export const ProjectsJoined = () => {
  return (
    <Tab title="Projects" icon={<Aggregate />}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <Heading textAlign="center" color="control">
          Live Projects
  </Heading>
        <DataTable columns={[{ "header": "Name", "property": "name", "primary": true }, { "header": "Owner", "property": "owner" }]} data={[{ "name": "Sustainable Leadership" }, { "name": "Trains" }]} size="medium" onClickRow={[{ "screen": 1, "label": "Screen", "key": 1 }]} pad="medium" />
      </Box>
    </Tab>
  )
}