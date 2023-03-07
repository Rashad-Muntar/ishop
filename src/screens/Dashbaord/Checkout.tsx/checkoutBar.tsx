import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { Colors } from '../../../shared/Constants'

interface Props {
  onCheckout: () => void
  disable: boolean
}
const CheckoutBar = ({ onCheckout, disable }: Props) => {
  return (
    <View style={styles.cartWrap}>
      <TouchableOpacity
        style={{
          width: '80%',
          backgroundColor: disable ? '#a0a0a0' : Colors.light.primaryRed,
          // backgroundColor: Colors.light.primaryRed,
          paddingHorizontal: 10,
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 15,
        }}
        onPress={onCheckout}
      >
        <Text style={styles.checkOut}>Proceed Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cartWrap: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    zIndex: 2,
  },
  cartContent: {
    width: '80%',
    backgroundColor: Colors.light.primaryRed,
    paddingHorizontal: 10,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  checkOut: {
    color: Colors.light.whiteText,
    fontSize: 18,
    fontWeight: '700',
  },
})

export default CheckoutBar
