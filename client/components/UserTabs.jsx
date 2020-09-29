import { Tabs } from 'grommet'
import React from 'react'
import { connect } from 'react-redux'
import CreateProject from './CreateProject'
import { ProjectsJoined } from './ProjectsJoined'
import UserProfile from './UserProfile'

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
