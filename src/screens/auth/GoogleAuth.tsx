import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import CButton from '../../shared/Button'
import React, { useState, useEffect } from 'react'
import { useSocialAuthMutation } from '../../generated/graphql'
import { loginAction } from '../../../StateManagement/Store/Actions/authAction'
import GoogleSvg from '../../../assets/svgs/Google'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../../shared/Constants'

WebBrowser.maybeCompleteAuthSession()

const GoogleAuth = () => {
  const userState = useSelector(state => state.user)
  const [createUser] = useSocialAuthMutation()
  const [accesToken, setAccessToken] = useState<string | undefined>(undefined)
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  // console.log(user)
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
    console.log(userState)
  },[user])
  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication?.accessToken)
    }
  }, [response])

  const fetchUserhandler = async () => {
    setLoading(true)
    try {
      let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${accesToken}`,
        },
      })
      const userInfo = await response.json()
      const newUser = await createUser({
        variables: {
          firstName: userInfo?.given_name,
          lastName: userInfo?.family_name,
          email: userInfo?.email,
          avatar: userInfo?.picture,
        },
      })
      console.log(newUser?.data?.socialAuth?.token)
      const userId = newUser?.data?.socialAuth?.client?.id
      const authToken = newUser?.data?.socialAuth?.token
      dispatch(loginAction({ userId, authToken }))
      setUser(userInfo)
    } catch (error) {
      throw error.message
    }

    setLoading(false)
    navigation.navigate('Categories')
  }

  return (
    <CButton
      onPress={
        accesToken
          ? fetchUserhandler
          : () => promptAsync({ useProxy: true, showInRecents: true })
      }
      svg={<GoogleSvg fill={Colors.light.textPrimaryBlack} />}
      title={loading ? <ActivityIndicator /> : 'Google'}
    />
  )
}

export default GoogleAuth
