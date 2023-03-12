import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location: {},
}
const locationSlice = createSlice({
  name: 'phoneNumber',
  initialState: initialState,
  reducers: {
    setLocation: (state, action) => {
      return { ...state, location: { ...state.location, ...action.payload } }
    },
  },
})

export const { setLocation } = locationSlice.actions
export const locationReducer = locationSlice.reducer
