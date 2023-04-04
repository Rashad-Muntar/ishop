import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: null,
  authToken: null,
  userName: ""
}

const authSlice = createSlice({
  name: 'locationDetail',
  initialState: initialState,
  reducers: {
    loginAction: (state, action) => {
      return {
        ...state,
        userId: action.payload.userId,
        authToken: action.payload.authToken,
        userName: action.payload.userName,
      }
    },
    logoutAction: (state, action) => {
      return {
        ...state,
        userId: null,
        authToken: null,
      }
    },
  },
})

export const { loginAction, logoutAction } = authSlice.actions
export const authReducer = authSlice.reducer
