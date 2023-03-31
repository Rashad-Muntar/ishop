import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  note: "",
}
const orderNoteSlice = createSlice({
  name: 'orderNOte',
  initialState: initialState,
  reducers: {
    setOrderNote: (state, action) => {
      return { ...state, note: action.payload }
    },
  },
})

export const { setOrderNote } = orderNoteSlice.actions
export const orderNoteReducer = orderNoteSlice.reducer
