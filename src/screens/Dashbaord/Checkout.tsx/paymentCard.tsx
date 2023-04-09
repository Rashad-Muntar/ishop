import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../../shared/Constants'

interface Props {
  logo: any
  cardNumbers: string
  onSelect?: () => void
  selected?: boolean
}
function PaymentCard({ logo, cardNumbers, onSelect, selected }: Props) {
  return (
    <Pressable onPress={onSelect} style={styles.container}>
      <View style={styles.logoArea}>
        <View>{logo}</View>
        <Text style={styles.cardNumber}>{cardNumbers}</Text>
      </View>
      <View style={styles.selector} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 10, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.light.textPrimaryBlack100,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 16,
    marginLeft: 20,
  },
  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selector: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.light.primary,
  },
})

export default PaymentCard
