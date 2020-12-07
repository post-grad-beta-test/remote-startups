import * as eventsData from '../api/eventsApi'
import { createSlice } from '@reduxjs/toolkit'

const initialJoinedState = {
  loading: false,
  failed: false,
  eventIds: []
}

const attendingEvents = createSlice({
  name: 'joined',
  initialState: initialJoinedState,
  reducers: {
    getEventIds: (state) => {
      state.loading = true
    },
    getEventIdsSuccess: (state, { payload }) => {
      state.eventIds = payload
      state.loading = false
      state.failed = false
    },
    getEventIdsError: (state) => {
      state.loading = false
      state.failed = true
    }
  }
})

const { actions, reducer } = attendingEvents

export const { getEventIds, getEventIdsSuccess, getEventIdsError } = actions

export const eventIdsSelector = (state) => state.eventIds

export default reducer

export function fetchJoinedEventIds (userId, eventId) {
  return async (dispatch) => {
    dispatch(eventsData.joinEvent(userId, eventId))
  }
}
