import React from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Colors } from '../../../shared/Constants'
import { useNavigation } from '@react-navigation/native'

interface Props {
  image: string
  title: string
  color: string
  onPress?: () => {}
}
function Category({ image, title, color, onPress }: Props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{ ...styles.card, backgroundColor: color }}
      onPress={onPress}
    >
      <Image source={{ uri: image }} style={styles.img} />
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 100,
    width: '27%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  img: {
    width: 50,
    height: 50,
  },
})

export default Category
