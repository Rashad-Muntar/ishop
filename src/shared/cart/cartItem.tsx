import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Colors } from '../Constants'

interface Props {
  image?: string
  title?: string
  price?: string
  qty?: string
  onIncrease?: () => void
  onDecrease?: any
  onRemove?: () => void
}

// increase, decrease

const CartItem = ({ qty, image, title, price, onIncrease, onDecrease }: Props) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.itemWrap}>
        <View style={styles.imgWrap}>
          <Image style={styles.img} source={{ uri: image }} />
          <View style={styles.titleWrap}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>

        <View style={styles.controlWrap}>
          <TouchableOpacity onPress={onDecrease} style={styles.down}>
            <Entypo
              name="circle-with-minus"
              size={27}
              color={Colors.light.primary}
            />
          </TouchableOpacity>
          <View><Text style={styles.qty}>{qty}</Text></View>
          <TouchableOpacity onPress={onIncrease}>
            <Entypo
              name="circle-with-plus"
              size={27}
              color={Colors.light.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.light.lightGray,
  },

  itemWrap: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    height: 60,
    width: 60,
  },

  imgWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleWrap: {
    alignItems: 'center',
    marginLeft: 10,
  },
  price: {
    color: Colors.light.primaryRed,
    fontWeight: '700',
  },
  title: {
    fontSize: 15,
  },
  controlWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '22%',
  },
  // down: {
  //   height: 25,
  //   width: 25,
  //   backgroundColor: Colors.light.primaryRed,
  //   padding: 5,
  //   borderRadius: 100,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  qty: {
    fontWeight: "700"
  }
})

export default CartItem
