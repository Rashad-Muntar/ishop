import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    location: {},
    distance: {}
}
const locationDetailSlice = createSlice({
  name: 'locationDetail',
  initialState: initialState,
  reducers: {
    setLocationDetails: (state, action) => {
      return { ...state, location: { ...state.location, ...action.payload } }
      },
      setLocationDistance: (state, action) => {
        return { ...state, distance: { ...state.distance, ...action.payload } }
      },
  },
})

export const {  setLocationDetails, setLocationDistance } = locationDetailSlice.actions
export const locationDetailReducer = locationDetailSlice.reducer
