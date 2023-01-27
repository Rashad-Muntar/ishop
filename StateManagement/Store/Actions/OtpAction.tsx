import { createSlice } from '@reduxjs/toolkit';

const phoneNumberSlice = createSlice({
  name: 'phoneNumber',
  initialState: '',
  reducers: {
    setPhoneNumber: (state, action) => {
      state = action.payload;
      return state
    }
  }
});

export const { setPhoneNumber } = phoneNumberSlice.actions;
export const phoneNumberReducer = phoneNumberSlice.reducer;