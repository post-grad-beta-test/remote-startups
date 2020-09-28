import { Tabs } from 'grommet'
import React from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import { ProjectsJoined } from './ProjectsJoined'
import { CreateProject } from './CreateProject'

function UserTabs() {
  return (
    <>

      <Tabs justify="end" flex margin="large">
        <UserProfile />
        <ProjectsJoined />
        <CreateProject />
      </Tabs >
    </>
  )
}


export default connect()(UserTabs)
