import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Colors } from '../../../shared/Constants'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  img?: string
  title: string
  price?: number
  detail?: string
  onAddToCart?: () => void
}
const Product = ({ img, detail, title, price, onAddToCart }: Props) => {
  return (
    <View style={styles.constainer}>
      <View style={styles.imgWrap}>
        <Image source={{ uri: img }} style={styles.img} />
        <View style={styles.allwrap}>
          <View style={styles.priceWrap}>
            <Text style={styles.title}>{title}</Text>
            <Text>${price}</Text>
          </View>
          <Text style={styles.desc}>{detail}</Text>
          <Ionicons name="ios-cart-outline" size={20} color={Colors.light.primary} style={styles.cart} onPress={onAddToCart} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    borderBottomWidth: 1,
    borderColor: Colors.light.lightGray,
    paddingVertical: 10,
  },
  imgWrap: {
    flexDirection: 'row',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 10,
  },
  allwrap: {
    width: '75%',
  },
  desc: {
    width: '80%',
    fontSize: 13,
  },
  title: {
    fontWeight: '500',
    
  },
  priceWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cart: {
    alignSelf: "flex-end",
    backgroundColor: Colors.light.lightGray,
    borderRadius: 100,
    padding: 5
  }
})

export default Product
