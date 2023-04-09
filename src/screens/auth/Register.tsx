import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Platform,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
// import { graphql } from '../../services/GraphqlClientService'
import { Colors } from '../../shared/Constants'
import SocialAuth from './SocialAuth'
import { useMutation } from 'react-query'
import PhoneInput from 'react-native-phone-number-input'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setPhoneNumber } from '../../../StateManagement/Store/Actions/OtpAction'
import { usePhoneVerificationMutation } from '../../generated/graphql'

const Register = () => {
  const [verifyPhone] = usePhoneVerificationMutation()
  const [number, setNumber] = React.useState('')
  const [isDisabled, setIsDisabled] = React.useState(true)
  const phoneInput = React.useRef(null)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const verifyHandler = () => {
    navigation.navigate('VerifyCode')
  }

  // useEffect(() => {
  //   const connect = async () => {
  //     const status = await voximplant.getClientState();
  //     if (status === Voximplant.ClientState.DISCONNECTED) {
  //       await voximplant.connect();
  //     } else if (status === Voximplant.ClientState.LOGGED_IN) {
            // return "Vox user is login"
  //     }
  //   };

  //   connect();
  // }, []);

  // const login = useMutation(
  //   () =>
  //     graphql.phoneVerification({
  //       phoneNumber: phoneNumber,
  //     }),
  //   {
  //     onSuccess: (result) => {
  //       if (result.phoneVerification.success) {
  //         verifyHandler()
  //       } else {
  //         navigation.navigate('Register')
  //       }
  //       dispatch(setPhoneNumber(phoneNumber))
  //     },
  //     onError: (e: any) => {
  //       // showErrorAlert({
  //       //   e,
  //       //   toast: {
  //       //     type: 'warning',
  //       //     message: t('Incorrect credentials, please try again!'),
  //       //   },
  //       // })
  //       return e.message
  //     },
  //   }
  // )

  const verifyNumberHandler = () => {
    try {
      verifyPhone({ variables: { phoneNumber: number } })
      dispatch(setPhoneNumber(number))
      verifyHandler()
    } catch (error) {}
  }

  const OnPress = () => {
    if (number.length !== 0) {
      Alert.alert('Confirm Number', number, [
        {
          text: 'Cancel',
          onPress: () => { return 'Cancel Pressed' },
        },

        {
          text: 'OK',
          onPress: () => {
            verifyNumberHandler()
          },
        },
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Enter phone number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={number}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textInput}
            textInputStyle={styles.textInputStyle}
            onChangeFormattedText={(text) => {
              setNumber(text)
              if (text.length >= 10) {
                setIsDisabled(false)
              } else {
                setIsDisabled(true)
              }
            }}
            defaultCode="CA"
            layout="first"
            autoFocus
          />
          <TouchableOpacity style={styles.button} onPress={() => OnPress()}>
            <Button
              title="Continue"
              color={
                Platform.OS === 'ios'
                  ? Colors.light.whiteText
                  : Colors.light.primary
              }
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.optionCTA}>Or register with</Text>
          </View>
          <SocialAuth />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    width: '75%',
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.light.lightGray,
  },

  button: {
    borderRadius: 25,
    marginVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    height: 50,
    width: '75%',
    ...Platform.select({
      android: {
        backgroundColor: 'red',
        borderRadius: 10,
      },
      ios: {
        backgroundColor: Colors.light.primary,
        borderColor: Colors.light.primary,
        borderWidth: 1,
        color: Colors.light.whiteText,
      },
    }),
  },
  textInputStyle: {
    paddingVertical: 0,
    fontWeight: '600',
  },
  textInput: {
    backgroundColor: Colors.light.lightGray,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '700',
  },
  subtext: {
    marginBottom: 40,
    width: '70%',
    textAlign: 'center',
  },
  social: {
    borderWidth: 2,
    borderColor: Colors.light.DarkBorder,
    paddingVertical: '2%',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '1%',
    width: '30%',
    margin: '2%',
  },

  optionCTA: {
    textAlign: 'center',
  },

  socialTitle: {
    marginLeft: '2%',
  },
})

export default Register
