import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shoppersIds: null,
}

const shopperSlice = createSlice({
  name: 'locationDetail',
  initialState: initialState,
  reducers: {
    setShoppersIds: (state, action) => {
      return {
        ...state,
        shoppersIds: action.payload.shoppersIds,
      }
    },
  },
})

export const { setShoppersIds } = shopperSlice.actions
export const shopperReducer = shopperSlice.reducer
