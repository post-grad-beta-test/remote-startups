import { Box, List, Tab } from 'grommet'
import { Aggregate } from 'grommet-icons'
import React from 'react'


export const ProjectsJoined = () => {
  return (
    <Tab title="Projects Joined" icon={<Aggregate />}>
      <Box align="center" justify="center" pad="xlarge">
        <List data={[{ 'name': 'Sustainability Project', 'Finishing': '05/10/20' }, { 'name': 'Communication Tool', 'Finishing': '11/10/20' }]} primaryKey="name" secondaryKey="finishing" />
      </Box>
    </Tab>
  )
}