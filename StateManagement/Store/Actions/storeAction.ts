import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  storeId: null,
  storeName: null,
}

const storeSlice = createSlice({
  name: 'locationDetail',
  initialState: initialState,
  reducers: {
    setStoreId: (state, action) => {
      return {
        ...state,
          userId: action.payload.storeId,
        storeName: action.payload.storeName,
      }
    },
    // logoutAction: (state, action) => {
    //   return {
    //     ...state,
    //     userId: null,
    //     authToken: null,
    //   }
    // },
  },
})

export const { setStoreId } = storeSlice.actions
export const storeReducer = storeSlice.reducer
