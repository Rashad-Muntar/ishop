import React from 'react'
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native'
import { Colors } from './Constants'

interface Props {
  svg?: any
  title?: string
  onPress?: () => void
  width?: any
  bg?: string
}

const CButton: React.FC<Props> = ({ svg, title, onPress, width, bg }) => {
  return (
    <TouchableOpacity style={{ ...styles.social, width: width, backgroundColor:bg}} onPress={onPress}>
        {svg}
        <Text style={styles.socialTitle}>{title}</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  social: {
    // borderWidth: 2,
    // borderColor: Colors.light.DarkBorder,
    paddingVertical: '2%',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '1%',
    width: '30%',
    // margin: '2%',
  },
  optionCTA: {
    textAlign: 'center',
  },

  socialTitle: {
    marginLeft: '2%',
  },
})

export default CButton
