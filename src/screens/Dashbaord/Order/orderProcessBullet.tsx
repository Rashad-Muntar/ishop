import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Colors } from '../../../shared/Constants'


interface Props {
    header: string,
    subtext: string,
    icon: any
}

const OrderProcessBullet = ({header, subtext, icon}:Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        <View style={styles.icon}>{icon}</View>
        <View>
          <Text style={styles.head}>{header}</Text>
          <Text style={styles.subText}>{subtext}</Text>
        </View>
        
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: Colors.light.lightGray,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Colors.light.primary,
    marginRight: 20
  },
  contentWrap: {
    flexDirection: "row",
    alignItems: "center"
  },
  head: {
    fontSize: 19,
    fontWeight: "600",
    color: Colors.light.primary
  },
  subText: {
    color: Colors.light.textPrimaryBlack,
    width: "82%"
  },
  container: {
    marginBottom: 15
  }
})

export default OrderProcessBullet
