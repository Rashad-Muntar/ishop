import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import UpcomingBooking from './UpcomingBooking'

const Booking = () => {
  const navigation = useNavigation()
  return (
    <View  style={styles.container}>
      <UpcomingBooking />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
})

export default Booking
