import { Box, Heading, DataTable, Tab } from 'grommet'
import { Aggregate } from 'grommet-icons'
import React from 'react'
import { connect } from 'react-redux'
import { showAllEvents } from '../api'
import { setEvents } from '../actions'

class Events extends React.Component{
  componentDidMount() {
      showAllEvents()
          .then(events => {
              this.props.dispatch(setEvents(events))
          })
          .catch(err => {
              console.log(err)
          })
  }

  render() {
      const {events} = this.props
  return (
    <Tab title="Events" icon={<Aggregate />}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <Heading textAlign="center" color="control">
          Live Events
  </Heading>
        <DataTable columns={[{ "header": "Name", "property": "name", "primary": true, "sortable": true, "search": true }, { "header": "Dates", "property": "dates", "sortable": true }, { "header": "Topic", "property": "topic", "sortable": true }, { "header": "Description", "property": "description" }]} data={[{ "name": "Sustainabile Leadership" }, { "name": "Trains" }]} size="small" onClickRow={[{ "screen": 1, "label": "Screen", "key": 1 }]} pad="medium" />
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