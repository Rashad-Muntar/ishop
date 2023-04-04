import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  note: "",
  orderTime: null
}
const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    setOrderNote: (state, action) => {
      return { ...state, note: action.payload.note }
    },
    setOrderTime: (state, action) => {
      return { ...state, orderTime: action.payload.orderTime }
    },
  },
})

export const { setOrderNote, setOrderTime } = orderSlice.actions
export const orderReducer = orderSlice.reducer
