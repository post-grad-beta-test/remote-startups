import * as eventsData from '../api/eventsApi'
import { createSlice } from '@reduxjs/toolkit'

const initialJoinedState = {
  loading: false,
  success: false,
  failed: false,
  eventIds: []
}

const attendingEvents = createSlice({
  name: 'event',
  initialState: initialJoinedState,
  reducers: {
    joiningEvent: (state) => {
      state.loading = true
    },
    joiningEventSuccess: (state) => {
      state.success = true
      state.loading = false
      state.failed = false
    },
    joiningEventError: (state) => {
      state.loading = false
      state.failed = true
    },
    getEventIdsComplete: (state, { payload }) => {
      state.eventIds = payload
    }
  }
})

const { actions, reducer } = attendingEvents

export const {
  fetchEvents,
  joiningEvent,
  joiningEventSuccess,
  joiningEventError
} = actions

export const eventIdsSelector = (state) => state.eventIds

export default reducer

export function joinEvent (userId, eventId) {
  return (dispatch) => {
    dispatch(joiningEvent())
    return eventsData
      .joinEvent(userId, eventId)
      .then((result) => {
        dispatch(joiningEventSuccess())
      })
      .catch((error) => console.log(error))
  }
}
