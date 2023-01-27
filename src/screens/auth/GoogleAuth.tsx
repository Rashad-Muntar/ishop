import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import CButton from '../../shared/Button'
import React, { useState, useEffect } from 'react'
import GoogleSvg from '../../../assets/svgs/Google'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../shared/Constants'

WebBrowser.maybeCompleteAuthSession()

const GoogleAuth = () => {
  const [accesToken, setAccessToken] = useState<string | undefined>(undefined)
  const [user, setUser] = useState()
  const navigation = useNavigation()

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      '786388500443-ho50efo22a6s2rke3402ak3gk71uqjk7.apps.googleusercontent.com',
    iosClientId:
      '786388500443-juqbpcomoknms7ggbbsq67ipdmis1kut.apps.googleusercontent.com',
    androidClientId:
      '786388500443-i735p8dip776gg8l9m16mct1akkgfv6q.apps.googleusercontent.com',
  })

  useEffect(() => {
    if (accesToken) {
      fetchUserhandler()
    }
  }, [accesToken])

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication?.accessToken)
      accesToken && fetchUserhandler()
    }
  })

  const fetchUserhandler = async () => {
    let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: {
        Authorizatino: `Bearer ${accesToken}`,
      },
    })
    const userInfo = await response.json()
    setUser(userInfo)
    navigation.navigate("Categories")
  }
  
  return (
    <CButton
      onPress={() => promptAsync()}
      svg={<GoogleSvg fill={Colors.light.textPrimaryBlack} />}
      title="Google"
    />
  )
}

export default GoogleAuth
