import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CartItem from '../shared/cart/cartItem'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const navigation = useNavigation()
  const cartItems = useSelector((state: any) => state.cart)
  const checkProducts = useSelector((state: any) => state.checkOut)
  const [data, setData] = useState() 
  return (
    <View>
      {checkProducts.map((item: any, index: any) => (
        <CartItem
          // key={index}
          // img={item.image}
          title={item.title}
          // price={item.price}
        />
      ))}
    </View>
  )
}

export default Checkout
