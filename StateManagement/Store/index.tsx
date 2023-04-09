import { configureStore } from '@reduxjs/toolkit'
import { phoneNumberReducer } from './Actions/OtpAction'
import { locationReducer } from './Actions/locationAction'
import { locationDetailReducer } from './Actions/locationDetails'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { cartReducer } from './Actions/cart'
import { checkoutReducer } from './Actions/checkout'
import { persistReducer } from 'redux-persist'
import { shopperReducer } from './Actions/shopperAction'
import { orderReducer } from './Actions/orderAction'
import { storeReducer } from './Actions/storeAction'
import { authReducer } from './Actions/authAction'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  phoneNumber: phoneNumberReducer,
  cart: cartReducer,
  checkOut: checkoutReducer,
  location: locationReducer,
  locationDetail: locationDetailReducer,
  order: orderReducer,
  user: authReducer,
  store: storeReducer,
  shopper: shopperReducer
})

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
})

export default store
