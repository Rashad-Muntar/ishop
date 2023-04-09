import React, { useEffect, useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Alert,
  TouchableOpacity,
  Button,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useCodeVerificationMutation } from '../../generated/graphql'
import { Colors } from '../../shared/Constants'
interface Props {}

interface State {
  otpCode: string[]
}

interface OtpState {
  otpCode: number
}

const VerifyCode: React.FC<Props> = () => {
  const [verifyCode] = useCodeVerificationMutation()
  const [otpCode, setOtpCode] = useState<State['otpCode']>(['', '', '', ''])
  const phoneNumber = useSelector((state: any) => state.phoneNumber)
  const [otpConvert, setOtpConvert] = useState<OtpState['otpCode']>(0)
  const navigation = useNavigation()

  const inputs: React.RefObject<TextInput>[] = [
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
  ]

  const handleOtpChange = (otp: string, index: number) => {
    let newOtpCode = [...otpCode]
    newOtpCode[index] = otp
    setOtpCode(newOtpCode)
    if (otp.length === 1) {
      let nextInput = index + 1
      if (nextInput <= 4) {
        inputs[nextInput].current?.focus()
      }
    }
  }

  useEffect(() => {
    if (otpCode[otpCode.length - 1] !== '') {
      const numString = [...otpCode].join('')
      const num = parseInt(numString)
      setOtpConvert(num)
    }
  }, [otpCode])

  const verifyCodeHandler = () => {
    navigation.navigate('Categories')
  }

  const verifyNumberHandler = () => {
    try {
      verifyCode({ variables: { phoneNumber: phoneNumber, code: otpConvert } })

      verifyCodeHandler()
    } catch (error) {}
  }

  // const login = useMutation(
  //   () =>
  //     graphql.codeVerification({
  //       phoneNumber: phoneNumber,
  //       code: otpConvert,
  //     }),
  //   {
  //     onSuccess: (result) => {
  //       if (result.codeVerification.success) {
  //         SetToken(result.codeVerification.token)
  //         verifyCodeHandler()
  //       } else {
  //         navigation.navigate('VerifyCode')
  //       }
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

  const OnPress = () => {
    if (otpCode[otpCode.length - 1] !== '') {
      verifyNumberHandler
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headings}>
            <Text style={styles.head}>A code was sent to</Text>
            <Text style={styles.number}>{phoneNumber}</Text>
          </View>

          <View style={styles.otpcontainer}>
            {otpCode.map((otp, index) => (
              <TextInput
                ref={inputs[index]}
                key={index}
                style={styles.input}
                maxLength={1}
                value={otp}
                autoFocus
                keyboardType="numeric"
                onChangeText={(text) => handleOtpChange(text, index)}
              />
            ))}
          </View>
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
          <TouchableOpacity>
            <Text style={styles.notReceived}>Didn't receive the code?</Text>
          </TouchableOpacity>
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
  otpcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  input: {
    width: '17%',
    height: 55,
    borderRadius: 4,
    textAlign: 'center',
    backgroundColor: Colors.light.lightGray,
    fontSize: 30,
    margin: 5,
  },
  text: {
    color: 'white',
    fontWeight: '600',
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
  number: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  headings: {
    marginVertical: '3%',
  },
  head: {
    textAlign: 'center',
  },
  notReceived: {
    color: Colors.light.primary,
  },
})

export default VerifyCode
