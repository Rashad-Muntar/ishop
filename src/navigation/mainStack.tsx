import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Categories from '../screens/Dashbaord/Category/Categories'
import Store from '../screens/Dashbaord/Vendors/Stores'
import OrderSubmitted from '../screens/Dashbaord/Checkout.tsx/orderSubmitted'
import StoreFront from '../screens/Dashbaord/Vendors/StoreFront'
import GetStarted from '../screens/GetStarted'
import Register from '../screens/auth/Register'
import ProductList from '../screens/Dashbaord/Product/ProductList'
import Checkout from '../screens/Dashbaord/Checkout.tsx/Checkout'
import ShopperConnect from '../screens/Dashbaord/Order/shopperConnect'
import OrderPeriod from '../screens/Dashbaord/Order/orderPeriod'
import MenuScreen from '../screens/Dashbaord/Category/menuScreen'
import ProductOrPlaceSearch from '../Search/ProductOrPlace'
import OrderNote from '../screens/Dashbaord/Order/OrderNote'
import { RootStackParamList } from '../../Types/stackTypes'
import { MenuDrawer } from './Drawer'
import Orders from '../screens/Dashbaord/Order'
import SearchView from '../screens/Dashbaord/Map/search'

const Stack = createStackNavigator()

const MainNavigation = () => {
  const [isLogin, setIsLogin] = useState()

  const checkLogin = async () => {
    let user = JSON.parse(await AsyncStorage.getItem('user'))
    setIsLogin(user)
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName="Home"
      mode="modal"
    >
      {/* <Stack.Screen name="Drawer" component={DrawerWrapper} /> */}
      {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="VerifyCode"
          options={{ headerShown: true }}
          component={VerifyCode}
        /> */}

      {/* {isLogin ? ( */}
        <Stack.Screen
          name="Categories"
          options={{ headerShown: false }}
          component={Categories}
        />
   
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={GetStarted}
        />
  
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Stores"
        options={{ headerShown: false }}
        component={Store}
      />
      <Stack.Screen
        name="StoreFront"
        options={{ headerShown: false }}
        component={StoreFront}
      />
      <Stack.Screen
        name="Products"
        options={{ headerShown: false }}
        component={ProductList}
      />
      <Stack.Screen
        name="Cart"
        options={{ headerShown: true }}
        component={Checkout}
      />
      <Stack.Screen
        name="shopperConnect"
        options={{ headerShown: false }}
        component={ShopperConnect}
      />
      <Stack.Screen
        name="Delivery-address"
        options={{ headerShown: true }}
        component={SearchView}
      />
      <Stack.Screen
        name="Order-Details"
        options={{ headerShown: true }}
        component={OrderNote}
      />
      <Stack.Screen
        name="Orders"
        options={{ headerShown: false }}
        component={Orders}
      />
      <Stack.Screen
        name="menuScreen"
        options={{ headerShown: false }}
        component={MenuScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="productOrPlaceSearch"
        component={ProductOrPlaceSearch}
      />
           {/* <Stack.Screen
        name="Cart"
        options={{ headerShown: true }}
        component={Checkout}
      /> */}
      <Stack.Screen
          name="Order-Complete"
          options={{ headerShown: false }}
          component={OrderSubmitted}
        />

    </Stack.Navigator>

  )
}

export default MainNavigation
