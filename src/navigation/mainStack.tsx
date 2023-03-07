import { createStackNavigator } from '@react-navigation/stack'
import Categories from '../screens/Dashbaord/Category/Categories'
import Store from '../screens/Dashbaord/Vendors/Stores'
import StoreFront from '../screens/Dashbaord/Vendors/StoreFront'
import ProductList from '../screens/Dashbaord/Product/ProductList'
import Checkout from '../screens/Dashbaord/Checkout.tsx/Checkout'
import { RootStackParamList } from '../../Types/stackTypes'
import { MenuDrawer } from './Drawer'

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    // <NavigationContainer>

    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName="Home"
      // mode="modal"
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
      <Stack.Screen
        options={{ headerShown: false }}
        name="MenuDrawer"
        component={MenuDrawer}
      />
      <Stack.Screen
        name="Categories"
        options={{ headerShown: false }}
        component={Categories}
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
        name="Checkout"
        options={{ headerShown: true }}
        component={Checkout}
      />
      {/* <Stack.Screen
          name="Categories"
          options={{ headerShown: false }}
          component={Categories}
        /> */}
      {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={GetStarted}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        /> */}
      {/* <Stack.Screen
          name="VerifyCode"
          options={{ headerShown: true }}
          component={VerifyCode}
        />
        <Stack.Screen
          name="Categories"
          options={{ headerShown: false }}
          component={Categories}
        />
        <Stack.Screen
          name="Store"
          options={{ headerShown: true }}
          component={Store}
        />
        <Stack.Screen
          name="Bookings"
          options={{ headerShown: true }}
          component={Booking}
        />
        <Stack.Screen
          name="History"
          options={{ headerShown: true }}
          component={Booking}
        />
        <Stack.Screen
          name="FAQ"
          options={{ headerShown: true }}
          component={Booking}
        /> */}
      {/* <Stack.Screen
          name="StoreFront"
          options={{ headerShown: false }}
          component={ProductCategoryList}
        /> */}

      {/* 
     
        */}
    </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default MainNavigation
