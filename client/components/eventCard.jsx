/* eslint-disable promise/always-return */
import { Box, Button, Grid, Heading, Paragraph, Text } from 'grommet'
import getIcon from '../helpers/getIcon'
import { Add } from 'grommet-icons'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { loadAllEvents, attendEvent, fetchEventIds } from '../actions'

const EventCard = ({ user, events, joinedIds }) => {
  const [listEvents, setListEvents] = useState([])
  const dispatch = useDispatch()
  /**
   * a function that dispatches a request for the user to join an event
   * @param {number} userId
   * @param {number} eventId - The id of the event user clicked
   */
  const subscribe = (userId, eventId) => {
    dispatch(attendEvent(userId, eventId))
      .then(dispatch(fetchEventIds(user)))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    dispatch(loadAllEvents())
      .then(setListEvents)
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    if (user) {
      dispatch(fetchEventIds(user)).catch((err) => console.error(err))
    }
  }, [])
  const AnIcon = getIcon()
  return (
    <div className='container'>
      <Grid gap='medium' columns={{ count: 'fit', size: 'medium' }}>
        {listEvents.map((event) => {
          return (
            <div key={event.id}>
              <Box
                align='center'
                pad='small'
                background={{
                  color: 'white',
                  image: "url('')",
                  position: 'bottom',
                }}
                round='medium'
                margin='medium'
                direction='column'
                alignSelf='center'
                animation={{ type: 'fadeIn', size: 'medium' }}
                elevation='medium'
              >
                <Box
                  align='start'
                  justify='start'
                  pad='small'
                  direction='row'
                  alignSelf='start'
                />
                <Box
                  align='center'
                  justify='center'
                  pad='xsmall'
                  margin='xsmall'
                  animation='zoomIn'
                  hoverIndicator
                  gap='xsmall'
                >
                  <AnIcon size='xlarge' />

                  <Heading
                    level='2'
                    size='medium'
                    margin='xsmall'
                    textAlign='center'
                    truncate={false}
                  >
                    {event.name}
                  </Heading>
                  <Text weight='bold' textAlign='center' size='medium'>
                    Dates: {event.date_start} - {event.date_end}
                  </Text>
                  <Paragraph size='small' margin='medium' textAlign='center'>
                    {event.description}
                  </Paragraph>

                  <Box
                    align='center'
                    justify='center'
                    pad='small'
                    direction='row-responsive'
                    flex
                    alignSelf='center'
                    basis='xxsmall'
                    gap='small'
                    margin='xsmall'
                  >
                    <Button
                      disabled={Boolean(
                        joinedIds.find((item) => item.project_id === event.id)
                      )}
                      label='Join'
                      icon={<Add />}
                      onClick={() => subscribe(user, event.id)}
                    />
                  </Box>
                </Box>
              </Box>
            </div>
          )
        })}
      </Grid>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    events: state.setEvents,
    user: state.createUser.id,
    joinedIds: state.setJoinEvent,
  }
}
export default connect(mapStateToProps)(EventCard)
