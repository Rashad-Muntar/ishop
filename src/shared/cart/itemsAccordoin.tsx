import React, { useState } from 'react'
import { ListItem, Icon } from '@rneui/themed'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../Constants'
import {
  removeItem,
  decrement,
  increment,
} from '../../../StateManagement/Store/Actions/cart'
import CartItem from './cartItem'

const ItemsAccordoin = () => {
  const [expanded, setExpanded] = useState()
  const cartItems = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const handleCartItemDecreament = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id))
      return
    } else {
      dispatch(decrement(item.id))
    }
  }
  return (
    <View style={{ marginHorizontal: 8 }}>
      <ListItem.Accordion
        content={
          <>
            <Ionicons name="md-receipt-outline" size={24} color="black" />
            <ListItem.Content>
              <ListItem.Title style={styles.heading}>
                Your Orders
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded)
        }}
      >
        {cartItems.map((item, index) => (
          <ListItem key={index} bottomDivider>
            <CartItem
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              qty={item.quantity}
              onDecrease={() => handleCartItemDecreament(item)}
              onIncrease={() => dispatch(increment(item.id))}
            />
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ListItem.Accordion>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 10,
    color: Colors.light.textPrimaryBlack,
  },
})

export default ItemsAccordoin
