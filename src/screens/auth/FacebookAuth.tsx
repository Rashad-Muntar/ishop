import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as Facebook from 'expo-auth-session/providers/facebook'
import CButton from '../../shared/Button'
import React, { useState, useEffect } from 'react'
import FacebookSvg from '../../../assets/svgs/Facebook'
import { useNavigation } from '@react-navigation/native'
import SetToken from '../../utils/screenHooks/setToken'
import { Colors } from '../../shared/Constants'

WebBrowser.maybeCompleteAuthSession()

const FacebookAuth = () => {
  const [accesToken, setAccessToken] = useState<string | undefined>(undefined)
  const [user, setUser] = useState()

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '630389702423293',
  })

  const navigation = useNavigation()

  useEffect(() => {
    if (accesToken) {
      fetchUserhandler()
    }
  }, [accesToken])

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication?.accessToken)
    }
  }, [response])

  const fetchUserhandler = async () => {
    let response = await fetch(
      `https://graph.facebook.com/me?fields=first_name,last_name,email,picture.type(large)&access_token=${accesToken}`
    )
    const userInfo = await response.json()
    setUser(userInfo)
    SetToken(accesToken)
    navigation.navigate('Categories')
  }

  return (
    <CButton
      onPress={() => promptAsync()}
      svg={<FacebookSvg fill={Colors.light.textPrimaryBlack} />}
      title="Facebook"
    />
  )
}

export default FacebookAuth
