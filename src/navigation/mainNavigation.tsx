
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/GetStarted';

const Stack = createStackNavigator()


const MainNavigation = () => {
  return (
    <NavigationContainer>
 <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  options={{headerShown: false}} name="Home" component={GetStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
