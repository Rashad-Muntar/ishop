import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const checkoutSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }) {

      const { id } = payload

      const find = state.find((item) => item.id === id)
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      } else {
        state.push({
          ...payload,
          quantity: 1,
        })
      }
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      return state.filter((item) => item.id !== itemId)
    },
    clear(state) {
      state = []
      return state
    },
  },
})

export const { addProduct, increment, decrement, removeItem, clear } =
checkoutSlice.actions
export const checkoutReducer = checkoutSlice.reducer
