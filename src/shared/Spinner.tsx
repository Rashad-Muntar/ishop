import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

function Spinner() {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerWrap}>
        <ActivityIndicator size={'large'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',

    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    width: '35%',
    height: '20%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Spinner
