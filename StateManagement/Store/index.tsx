import { configureStore } from '@reduxjs/toolkit';
import { phoneNumberReducer } from './Actions/OtpAction';
import { locationReducer } from './Actions/locationAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cartReducer } from './Actions/cart';
import { checkoutReducer } from './Actions/checkout';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    phoneNumber: phoneNumberReducer,
    cart: cartReducer,
    checkOut: checkoutReducer,
    location: locationReducer
    // order: userOrdersReducer,
});
  
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['cart', 'order', 'account'],
//   };
  
//   const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: [thunk],
});

export default store;