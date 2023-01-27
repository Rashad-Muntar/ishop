import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface Props {
  icon?: string
  title?: string
  onPress?: () => void
}
const MenuItem = ({ icon, title, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%',
  },
  icon: {
    marginRight: '5%',
  },
  title: {
    fontSize: 15,
  },
})

export default MenuItem
