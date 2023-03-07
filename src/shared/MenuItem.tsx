import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  icon?: string
  title?: string
  onPress?: () => void
}
const MenuItem = ({ icon, title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
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
