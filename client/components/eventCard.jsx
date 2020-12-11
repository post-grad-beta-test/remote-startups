/* eslint-disable promise/always-return */
import { Box, Button, Grid, Heading, Paragraph, Text } from 'grommet'
import getIcon from '../helpers/getIcon'
import { Add, PowerCycle } from 'grommet-icons'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import {
  loadAllEvents,
  attendEvent,
  fetchEventIds,
  setDisabled,
} from '../actions'

const EventCard = ({ user, events, joinedIds }) => {
  const [listEvents, setListEvents] = useState([])
  const dispatch = useDispatch()

  /**
   * a function that dispatches a request for the user to join an event
   * @param {number} userId
   * @param {number} eventId - The id of the event user clicked
   */
  const subscribe = (userId, eventId) => {
    // dispatch(setDisabled(eventId)
    dispatch(attendEvent(userId, eventId))
      .then(dispatch(fetchEventIds(userId)))
      .then((eventIds) => console.log(eventIds))
  }

  useEffect(() => {
    dispatch(loadAllEvents()).then(setListEvents)
  }, [])

  // useEffect(() => {
  //   setBtnDisabled
  // })
  // useEffect(() => {
  //   setBtnDisabled(events.id.disabled)
  // }, {})

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
                  // 0: 'b',
                  // 1: 'r',
                  // 2: 'a',
                  // 3: 'n',
                  // 4: 'd',
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
                  {/* <Image src={`project.images/project_image_${imageNum}.svg`} opacity="strong" /> */}
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
                    {/* {!isLoading && (
                    <Button label='Join' icon={<Add />} onClick={subscribe} />
                  )}
                  {isLoading && <PowerCycle label='Joining now...' />} */}
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
