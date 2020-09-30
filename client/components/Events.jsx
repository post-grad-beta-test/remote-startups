import { Box, Heading, DataTable, Tab } from 'grommet'
import { Aggregate } from 'grommet-icons'
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { showAllEvents } from '../api/eventsApi'
import { setEvents } from '../actions'
import { columns, getData } from '../helpers'

const Events = () => {
  const [listEvents, setListEvents] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    showAllEvents()
      .then((events) => {
        setListEvents(events)
        dispatch(setEvents(events))
      })
      
  }, [])
  console.log(listEvents);

  
  return (
    <Tab title="Events" icon={<Aggregate />}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <Heading textAlign="center" color="control">
          Live Events
              </Heading>
        <DataTable
          columns={columns}
          data={getData(listEvents)}
          size="small"
          pad="medium" />
      </Box>
    </Tab>
  )

}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}
export default connect(mapStateToProps)(Events)