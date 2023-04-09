import React, { useMemo, useRef } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import PaymentCard from './paymentCard'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SavePaymentInfo from './savePaymentInfo'
import { Colors } from '../../../shared/Constants'


interface Props {
  onpenPaymentSheet?: () => void
  onOpenSheet?: number
}
const PaymenOption = ({onpenPaymentSheet, onOpenSheet}:Props) => {
  const snapPoints = useMemo(() => ['1%','75%'], [])
  const navigation = useNavigation()
  const sheetRef = useRef<BottomSheet>(null)

  return (
    <BottomSheetDrawer
      index={onOpenSheet}
      onPandown={true}
      snaPoints={snapPoints}
      sheetRef={sheetRef}
      style={styles.sheetStyle}
    >
      <Text style={styles.paymentHead}>Payment option</Text>
      <View>
        <PaymentCard
          cardNumbers="12121211"
          logo={
            <FontAwesome
              name="cc-visa"
              size={40}
              color={Colors.light.textPrimaryBlack}
            />
          }
        />
        <PaymentCard
          cardNumbers="12121211"
          logo={
            <FontAwesome
              name="cc-mastercard"
              size={40}
              color={Colors.light.textPrimaryBlack}
            />
          }
        />
      </View>
      <View>
        <Text style={styles.paymentHead}>Payment Method</Text>
        <SavePaymentInfo />
      </View>
    </BottomSheetDrawer>
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

export default PaymenOption
