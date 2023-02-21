import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Colors } from './Constants'
interface Props {
  image?: any
  title: String
}
const SubCaterory = ({ image, title }: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <View >{image}</View>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 55,
    height: 55,
    borderRadius: 75,
    backgroundColor: Colors.light.primary100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },

})

export default SubCaterory
