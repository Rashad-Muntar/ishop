import { NavigationContainer } from '@react-navigation/native'

// import GetStarted from '../screens/GetStarted'
// import Register from '../screens/auth/Register'
// import VerifyCode from '../screens/auth/verifyOTP'
// import Categories from '../screens/Dashbaord/Category/Categories'

// import CustomDrawer from '../shared/CustomDrawer'
// import CartItemList from '../shared/cart/cartItemList'
// import Store from '../screens/Dashbaord/Vendors/Stores'
// import Booking from '../screens/Dashbaord/Booking/Booking'
// import StoreFront from '../screens/Dashbaord/Vendors/StoreFront'
// import ProductList from '../screens/Dashbaord/Product/ProductList'
// import Checkout from '../screens/Checkout'import React from 'react';

import MainNavigation from './mainStack';


const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
export default RootNavigator;









