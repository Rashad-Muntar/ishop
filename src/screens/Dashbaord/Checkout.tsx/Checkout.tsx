import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import PrimaryButton from '../../../shared/PrimaryButton'
import { Colors } from '../../../shared/Constants'
import CartItem from '../../../shared/cart/cartItem'
import { useStripe, usePaymentSheet } from '@stripe/stripe-react-native'
import { cartTotalPriceSelector } from '../../../../StateManagement/selectors'
import { useCreatePaymentIntentMutation } from '../../../generated/graphql'
import LocationSelection from '../../../shared/cart/locationSelection'
import OrderPeriod from '../Order/orderPeriod'
import { Overlay } from '@rneui/themed'
import { EvilIcons } from '@expo/vector-icons'
import PaymenOption from './PaymenOption'
import ItemsAccordoin from '../../../shared/cart/itemsAccordoin'
import MapScreen from '../Map/mapView'

// import ShopperConnect from '../Order/shopperConnect'
import {
  increment,
  decrement,
  removeItem,
} from '../../../../StateManagement/Store/Actions/checkout'
import { useDispatch, useSelector } from 'react-redux'
import OrderSummary from './orderSummary'
import CheckoutBar from './checkoutBar'

interface PaymentProps {
  paymentIntent: string
  ephemeralKey: string
  customer: string
  publishableKey: string
}
const Checkout = () => {
  const navigation = useNavigation()
  const cartItems = useSelector((state: any) => state.cart)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [paymentSheetInitialized, setPaymentSheetInitialized] = useState(false)
  const totalPrice = useSelector(cartTotalPriceSelector)
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [loading, setLoading] = useState(true)
  const [checkoutSheetIndex, setCheckoutSheetIndex] = useState(0)
  const dispatch = useDispatch()
  const [paymentOptionSheet, setPaymentOptionSheet] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const amount = Math.floor(totalPrice * 100 || 0)
  const [createIntent, { data }] = useCreatePaymentIntentMutation()

  // useEffect(() => {
  //   fetchPaymentSheetParams()
  // })

  useEffect(() => {
    setLoading(false)
  }, [data])

  const _openPaymentOptionHandler = () => {
    setCheckoutSheetIndex(1)
    setPaymentOptionSheet(!paymentOptionSheet)
  }

  // const fetchPaymentSheetParams = async () => {
  //   await createIntent({
  //     variables: {
  //       amount: amount,
  //     },
  //   })

  //   const params = {
  //     paymentIntent: data?.createPaymentIntent?.paymentIntent,
  //     ephemeralKey: data?.createPaymentIntent?.ephemeralKey,
  //     customer: data?.createPaymentIntent?.customer,
  //     publishableKey: data?.createPaymentIntent?.publishableKey,
  //   }

  //   initializePaymentSheet(params)
  // }

  // const initializePaymentSheet = async ({
  //   paymentIntent,
  //   ephemeralKey,
  //   customer,
  //   publishableKey,
  // }:PaymentProps) => {
  //   const { error } = await initPaymentSheet({
  //     merchantDisplayName: 'Example, Inc.',
  //     customerId: customer,
  //     customerEphemeralKeySecret: ephemeralKey,
  //     paymentIntentClientSecret: paymentIntent,
  //   })

  //   if (!error) {
  //     setPaymentSheetInitialized(true)
  //   }
  // }

  // const openPaymentSheet = async () => {
  //   if (!paymentSheetInitialized) {
  //     return
  //   }

  //   const { error } = await presentPaymentSheet()
  //   if (error) {
  //     return error
  //   } else {
  //     navigation.navigate('Order-Complete')
  //   }
  // }

  return (
    <View style={styles.container}>
      {paymentSheetInitialized && <Overlay index={2} />}
      <View style={{ height: '23%' }}>
        <MapScreen mapHeight="100%" />
      </View>
      <ScrollView>
        <LocationSelection />
        <TouchableOpacity
          style={styles.date}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="time-outline" size={24} color="black" />
          <Text style={styles.placeholder}>Pick time and date</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <OrderPeriod closeModal={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
        </Modal>
        <ItemsAccordoin />

        <View style={styles.promoArea}>
          <Text>Promo code?</Text>
          <PrimaryButton
            height="80%"
            bg={Colors.light.whiteText}
            title="Apply"
          />
        </View>
        <OrderSummary
          total={totalPrice}
          delivery={0}
          discount={0}
          grandTotal={totalPrice}
        />
      </ScrollView>
      <PaymenOption
        // onpenPaymentSheet={openPaymentSheet}
        onOpenSheet={checkoutSheetIndex}
      />
      <View style={styles.checkoutBtnWrap}>
        <PrimaryButton
          fontSize={16}
          title="Proceed to Checkout"
          disable={loading}
          onPress={_openPaymentOptionHandler}
          height={50}
          width="80%"
          textColors={Colors.light.whiteText}
          bg={Colors.light.primaryRed}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
  },
  headingWrdapper: {
    marginVertical: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
    borderRadius: 70,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  date: {
    // width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.light.primary,
    margin: 15,
    marginBottom: 8,
  },
  placeholder: {
    marginLeft: 10,
    color: Colors.light.textPrimaryBlack,
  },
  promoArea: {
    borderRadius: 10,
    backgroundColor: Colors.light.lightGray,
    borderColor: Colors.light.primaryBlue100,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkoutBtnWrap: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
})

export default Checkout
