import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { Colors } from '../../../shared/Constants'

interface Props {
  img?: string
  title: string
  onPress?: () => void
}
const ProductCategory = ({ img, title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={img}
        imageStyle={{
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.light.lightGray,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: '8%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 4,
  },
  img: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  title: {
    padding: '4%',
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.textPrimaryBlack,
  },
})

export default ProductCategory
