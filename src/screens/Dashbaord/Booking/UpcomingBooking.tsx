import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const UpcomingBooking = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../../assets/Solids/empty.png')}
      />
      <Text style={styles.msg}>Ooops no bookings found</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  msg: {
    fontWeight: '700',
    fontSize: 16,
  },
})

export default UpcomingBooking
