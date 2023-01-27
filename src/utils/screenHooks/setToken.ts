import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SetToken = async (token: string) => {
  try {
    token && (await AsyncStorage.setItem('userToken', token))
  } catch (e) {
    // saving error
  }
}

export default SetToken
