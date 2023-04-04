import React, { useState, useEffect } from 'react'
import { LinearProgress } from '@rneui/themed'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  Alert,
} from 'react-native'
import { Colors } from './Constants'

interface Props {
  loadingProgress: any
}

const FindDriverProgress = ({ loadingProgress }: Props) => {
  
  const [progress, setProgress] = useState(loadingProgress)
  useEffect(() => {
    let subs = true
    if (progress < 1 && progress !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.1)
        }
      }, 1500)
    }
    return () => {
      subs = false
    }
  }, [progress])
  return (
    <View>
      <Text style={styles.connecting}>Connecting to a shopper</Text>
      <LinearProgress
        style={{ marginVertical: 20 }}
        value={progress}
        variant="determinate"
        color={Colors.light.primaryRed}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  connecting: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.textPrimaryBlack,
  },
})
export default FindDriverProgress
