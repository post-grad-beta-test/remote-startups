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
        <DataTable columns={[{ "header": "Name", "property": "name", "primary": true, "sortable": true, "search": true }, { "header": "Dates", "property": "dates", "sortable": true }, { "header": "Topic", "property": "topic", "sortable": true }]} data={[{ "name": "Emma" }, { "name": "Aidan" }]} size="small" onClickRow={[{ "screen": 1, "label": "Screen", "key": 1 }]} pad="medium" />
      </Box>
    </Tab>
  )
}