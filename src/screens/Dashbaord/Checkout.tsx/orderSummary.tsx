import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../../shared/Constants'
interface Props {
    total?: number,
    delivery?: number,
    discount?: number,
    grandTotal?: number
}
function OrderSummary({total, delivery, discount, grandTotal}:Props) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
          <View style={styles.itemWrap}>
              <Text style={styles.item}>Sub-total</Text>
        <Text style={styles.item}>$ {total}</Text>
          </View>
          <View style={styles.itemWrap}>
              <Text style={styles.item}>Delivery</Text>
              <Text style={styles.item}>$1.5</Text>
      </View>
      <View style={styles.itemWrap}>
              <Text style={styles.item}>discount</Text>
              <Text style={styles.item}>$0.00</Text>
        </View>
      <View style={styles.totalLine} />
          <View style={styles.itemWrap}>
              <Text style={styles.item}>Total</Text>
        <Text style={styles.item}>${total}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 40,
    marginBottom: 60
  },
  itemWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  item: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.light.textPrimaryBlack
  },
  line: {
    borderWidth: 1,
    borderColor: Colors.light.primaryBlue100,
    marginVertical: 5,
    borderStyle: "dashed"
  },
  totalLine: {
    borderWidth: 1,
    borderColor: Colors.light.lightGray,
    marginVertical: 5,
    borderStyle: "dashed"
  }
})

export default OrderSummary
