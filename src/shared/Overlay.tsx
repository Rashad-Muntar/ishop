import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

interface Props {
    index: number
    chiledren?: ReactNode
}
const Overlay = ({ index, chiledren }: Props) => {
  return (
    <View style={{ ...styles.container, zIndex: index }}>
      {chiledren}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.1,
  },
})
export default Overlay
