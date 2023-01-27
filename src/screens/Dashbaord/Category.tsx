import React from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../shared/Constants'

interface Props {
  image: string
  color: string
}
function Category({ image, color }: Props) {
  return (
    <TouchableOpacity style={{ ...styles.card, backgroundColor: color }}>
      <Image source={image} style={styles.img} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 130,
    width: '35%',
        marginBottom: 35,
        alignItems: "center",
        justifyContent: "center"
  },
  img: {
    width: 100,
    height: 100,
  },
})

export default Category
