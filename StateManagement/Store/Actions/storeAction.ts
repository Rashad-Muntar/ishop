import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  storeId: null,
  storeName: null,
}

const storeSlice = createSlice({
  name: 'locationDetail',
  initialState: initialState,
  reducers: {
    setStoreInfo: (state, action) => {
      return {
        ...state,
        storeId: action.payload.storeId,
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

export const { setStoreInfo } = storeSlice.actions
export const storeReducer = storeSlice.reducer
