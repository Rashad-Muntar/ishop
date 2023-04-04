import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useRef, useCallback, useMemo, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../Constants'
import { useNavigation } from '@react-navigation/native'
import { BottomSheetModal, BottomSheetFlatList } from '@gorhom/bottom-sheet'
import BottomSheet from '@gorhom/bottom-sheet'
import { useSelector } from 'react-redux'

interface Props {
  onOpenCart: any
  totalItems?: any
  totalPrice?: any
}
const Cart = ({onOpenCart, totalItems, totalPrice}:Props) => {
  return (
 
   <TouchableOpacity style={styles.cartWrap} onPress={onOpenCart}>
      <View style={styles.cartContent}>
        <View style={styles.cartIcon}>
          <Ionicons
            name="ios-cart-outline"
            size={26}
            color={Colors.light.whiteText}
            style={styles.cart}
          />
          <View style={styles.itemCount}>
            <Text style={styles.count}>{totalItems}</Text>
          </View>
        </View>
        <View style={styles.pricing}>
          <Text style={styles.price}>${totalPrice}</Text>
          <Text style={styles.delivery}>Delivery fee is not included</Text>
        </View>
      </View>

      
      </TouchableOpacity>

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
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  cartIcon: {
    alignSelf: 'flex-start',
    width: 45,
    height: 50,
  },
  cart: {
    position: 'absolute',
    bottom: 5,
  },
  itemCount: {
    backgroundColor: Colors.light.whiteText,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 2,
    width: 22,
    height: 22,
    top: 7,
  },
  count: {
    color: Colors.light.textPrimaryBlack,
    fontWeight: '600',
    textAlign: 'center',
  },
  pricing: {
    marginLeft: 15,
  },
  delivery: {
    color: Colors.light.whiteText,
    opacity: 0.7,
    fontSize: 10,
    fontWeight: '600',
  },
  price: {
    color: Colors.light.whiteText,
    fontSize: 17,
    fontWeight: '700',
  },
})

export default Cart

      {/* <CartBottomSheet
        bottomSheetRef={sheetRef}
        index={0}
        snapPoints={snapPoints}
        // onShow={isOpen}
      /> */}
        {/* {cartItems.map((item:any, index:any) => (
            <CartItem key={index} img={item.image} title={item.title} price={item.price} />
          ))} */}
   

        {/* <FlatList
          data={cartItems}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        /> */}
      {/* </CartBottomSheet> */}
