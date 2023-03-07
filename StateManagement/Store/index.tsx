import { configureStore } from '@reduxjs/toolkit';
import { phoneNumberReducer } from './Actions/OtpAction';

const store = configureStore({
    reducer: {
        phoneNumber: phoneNumberReducer
    },
    devTools: true
});

export default store;