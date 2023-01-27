import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GetStarted from '../screens/GetStarted'
import Register from '../screens/auth/Register'
import VerifyCode from '../screens/auth/verifyOTP'
import Categories from '../screens/Dashbaord/Categories'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../shared/CustomDrawer'
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
    >
      {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={GetStarted}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="VerifyCode"
          options={{ headerShown: true }}
          component={VerifyCode}
        />
      <Stack.Screen
        name="Categories"
        options={{ headerShown: false }}
        component={Categories}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default DrawerNavigator
