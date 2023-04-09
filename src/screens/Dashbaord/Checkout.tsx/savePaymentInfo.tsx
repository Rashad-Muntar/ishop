import React, { useEffect, useState } from 'react'
import { useStripe } from '@stripe/stripe-react-native'
import PrimaryButton from '../../../shared/PrimaryButton'
import { Colors } from '../../../shared/Constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSavePaymentInfoIntentMutation } from '../../../generated/graphql'
import { View, Alert, Text, Pressable, StyleSheet } from 'react-native'

const SavePaymentInfo = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [createPaymentInfo, { data }] = useSavePaymentInfoIntentMutation()
  const [loading, setLoading] = useState(false)

  const fetchPaymentSheetParams = async () => {
    await createPaymentInfo()
    const params = {
      setupIntent: data?.savePaymentInfoIntent?.setupIntent,
      ephemeralKey: data?.savePaymentInfoIntent?.ephemeralKey,
      customer: data?.savePaymentInfoIntent?.customer,
    }
    return params
  }

  const initializePaymentSheet = async () => {
    try {
      const { setupIntent, ephemeralKey, customer } =
        await fetchPaymentSheetParams()
      await initPaymentSheet({
        merchantDisplayName: 'Example, Inc.',
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        setupIntentClientSecret: setupIntent,
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet()
    if (error) {
      Alert.alert(`${error.code}`, error.message)
    } else {
      Alert.alert('Success', 'Your have successfully add your payment option')
    }
  }

  useEffect(() => {
    initializePaymentSheet()
  })

  return (
    <View>
      <Pressable style={styles.addPayment} onPress={openPaymentSheet}>
        <MaterialCommunityIcons
          name="cash-check"
          size={30}
          color={Colors.light.textPrimaryBlack}
        />
        <Text style={styles.addPaymentText}>Add a payment menthod</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  sheetStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 5,
  },
  paymentHead: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.light.textPrimaryBlack,
    marginVertical: 20,
  },
  addPayment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPaymentText: {
    marginLeft: 15,
    fontWeight: '600',
  },
})

export default SavePaymentInfo
