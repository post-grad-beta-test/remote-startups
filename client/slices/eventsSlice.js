import { createSlice } from '@reduxjs/toolkit'

const eventSlice = createSlice({
  name: event,
  initialState: [],
  reducer: {
    setEvents (state, action) {}
  }
})

const { actions, reducer } = eventSlice

export const { setEvents } = actions

export default reducer
