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
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{ uri: image }} style={styles.img} />
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 100,
    height: 50,
    width: 50,
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: Colors.light.lightGray,
  },
  img: {
    width: 30,
    height: 30,
  },
  wrapper: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20
  }
})

export default Category
