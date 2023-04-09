import React from 'react'
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native'
import { Colors } from './Constants'

interface Props {
  svg?: any
  title?: string
  disable: boolean
  onPress?: () => void
  textColors?: string
  width?: any
  height?: string | number
  bg?: string
  fontSize: number
}

const PrimaryButton: React.FC<Props> = ({
  height,
  disable,
  fontSize,
  textColors,
  svg,
  title,
  onPress,
  width,
  bg,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.social,
        height: height,
        width: width,
        backgroundColor: disable ? '#a0a0a0' : bg,
      }}
      onPress={onPress}
    >
      {svg}
      <Text
        style={{ fontWeight: '600', fontSize: fontSize, color: textColors }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  social: {
    paddingVertical: '2%',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  optionCTA: {
    textAlign: 'center',
  },
})

export default PrimaryButton
