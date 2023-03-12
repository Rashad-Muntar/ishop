import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CartItem from '../../../shared/cart/cartItem'
import { useStripe, usePaymentSheet } from '@stripe/stripe-react-native'
import { cartTotalPriceSelector } from '../../../../StateManagement/selectors'
import { useCreatePaymentIntentMutation } from '../../../generated/graphql'
// import ShopperConnect from '../Order/shopperConnect'
import {
  increment,
  decrement,
  removeItem,
} from '../../../../StateManagement/Store/Actions/checkout'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutBar from './checkoutBar'

const Checkout = () => {
  const navigation = useNavigation()
  const cartItems = useSelector((state: any) => state.cart)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [paymentSheetInitialized, setPaymentSheetInitialized] = useState(false);
  const totalPrice = useSelector(cartTotalPriceSelector)
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const amount = Math.floor(totalPrice * 100 || 0)
  const [createIntent, { data }] = useCreatePaymentIntentMutation()

  const handleCartItemDecreament = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id))
      return
    } else {
      dispatch(decrement(item.id))
    }
  }

  useEffect(() => {
    fetchPaymentSheetParams();
  });

  useEffect(() => {
    setLoading(false)
  },[data])
  
  const fetchPaymentSheetParams = async () => {
    await createIntent({
      variables: {
      amount: amount
      }
    })
  
    const params = {
      paymentIntent: data?.createPaymentIntent?.paymentIntent,
      ephemeralKey: data?.createPaymentIntent?.ephemeralKey,
      customer: data?.createPaymentIntent?.customer,
      publishableKey: data?.createPaymentIntent?.publishableKey
    };
  
    initializePaymentSheet(params);
  };
  
  const initializePaymentSheet = async ({ paymentIntent, ephemeralKey, customer, publishableKey }) => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });
    
    if (!error) {
      setPaymentSheetInitialized(true);
    }
  };
  
  const openPaymentSheet = async () => {
    if (!paymentSheetInitialized) {
      return;
    }
  
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      navigation.navigate("shopperConnect")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headingWrdapper}>
        <Text style={styles.heading}>Your Orders</Text>
      </View>
      {cartItems.map((item: any, index: any) => (
        <CartItem
          key={index}
          image={item.image}
          title={item.title}
          price={item.price}
          qty={item.quantity}
          onDecrease={() => handleCartItemDecreament(item)}
          onIncrease={() => dispatch(increment(item.id))}
        />
      ))}
      <CheckoutBar onCheckout={openPaymentSheet} disable={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
  },
  headingWrdapper: {
    marginVertical: 20,
  },
})

export default Checkout
