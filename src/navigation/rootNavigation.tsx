import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './mainStack'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const RootNavigator = () => {
  const [isLogin, setIsLogin] = useState()

  const checkLogin = async () => {
    let user = JSON.parse(await AsyncStorage.getItem('user'))
    setIsLogin(user)
  }

  useEffect(() => {
    checkLogin()
    console.log(isLogin)
  }, [])

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}
export default RootNavigator
