import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GetStarted from '../screens/GetStarted'
import Register from '../screens/auth/Register'
import VerifyCode from '../screens/auth/verifyOTP'
import Categories from '../screens/Dashbaord/Category/Categories'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../shared/CustomDrawer'
import Store from '../screens/Dashbaord/Vendors/Stores'
import Booking from '../screens/Dashbaord/Booking/Booking'
import ProductCategoryList from '../screens/Dashbaord/Product/ProductCategoryList'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerPosition="left"
    overlayColor="transparent"
    drawerStyle={{
      width: '80%',
    }}
    drawerContent={(props: any) => <CustomDrawer {...props} />}
    contentContainerStyle={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    drawerContentOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 18,
      },
    }}
  >
    <Drawer.Screen name="main" component={MainNavigation} />
    {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
  </Drawer.Navigator>
)

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
      mode="modal"
    >
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
        component={ProductCategoryList}
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

export default DrawerNavigator
