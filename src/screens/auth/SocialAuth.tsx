// client-id 786388500443-ho50efo22a6s2rke3402ak3gk71uqjk7.apps.googleusercontent.com
// client-secrete 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

// ios client-id 786388500443-juqbpcomoknms7ggbbsq67ipdmis1kut.apps.googleusercontent.com
// anddroid 786388500443-i735p8dip776gg8l9m16mct1akkgfv6q.apps.googleusercontent.com

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as Facebook from 'expo-auth-session/providers/facebook'
import { View, Text, StyleSheet } from 'react-native'
import CButton from '../../shared/Button'
import React, { useState, useEffect } from 'react'
import GoogleSvg from '../../../assets/svgs/Google'
import FacebookSvg from '../../../assets/svgs/Facebook'
import { useNavigation } from '@react-navigation/native'
import { ResponseType } from 'expo-auth-session'
import GoogleAuth from './GoogleAuth'
import { Colors } from '../../shared/Constants'
import FacebookAuth from './FacebookAuth'

WebBrowser.maybeCompleteAuthSession()

const SocialAuth = () => {
  const [accesToken, setAccessToken] = useState<string | undefined>(undefined)
  const [user, setUser] = useState()

  const [Grequest, Gresponse, GpromptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      '786388500443-ho50efo22a6s2rke3402ak3gk71uqjk7.apps.googleusercontent.com',
    iosClientId:
      '786388500443-juqbpcomoknms7ggbbsq67ipdmis1kut.apps.googleusercontent.com',
    androidClientId:
      '786388500443-i735p8dip776gg8l9m16mct1akkgfv6q.apps.googleusercontent.com',
  })

  const [Frequest, Fresponse, FpromptAsync] = Facebook.useAuthRequest({
    clientId: '630389702423293',
    responseType: ResponseType.Code,
  })

  const navigation = useNavigation()

  useEffect(() => {
    if (Gresponse?.type === 'success') {
      setAccessToken(Gresponse.authentication?.accessToken)
      accesToken && fetchUserhandler()
    }
  })

  //   useEffect(() => {
  //     if (user) {
  //       navigation.navigate('Categories')
  //     } else {
  //       navigation.navigate('Home')
  //     }
  //   }, [user])
  const fetchUserhandler = async () => {
    console.log('hitfetch')
    let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: {
        Authorizatino: `Bearer ${accesToken}`,
      },
    })
    const userInfo = await response.json()
    setUser(userInfo)
  }
  return (
    <View style={styles.socialWrapper}>
      <GoogleAuth />
      <FacebookAuth />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialWrapper: {
    flexDirection: 'row',
    marginTop: '5%',
  },

})

export default SocialAuth
