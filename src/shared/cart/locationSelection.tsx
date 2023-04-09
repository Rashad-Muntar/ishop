import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../Constants'

const LocationSelection = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.friendArea}>
        <View style={styles.textArrowWrap}>
          <Feather name="users" size={22} color="black" />
          <Pressable style={styles.addreddTextArea} onPress={() => navigation.navigate('Delivery-address')}>
            <Text style={styles.address}>Sending to someone eles?</Text>
            <Text style={styles.addressSub}>
              Enter details for your shopper
            </Text>
          </Pressable>
        </View>

        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
      <Pressable style={styles.deliveryAdd} onPress={() => navigation.navigate('Delivery-address')}>
        <View style={styles.textArrowWrap}>
          <EvilIcons name="location" size={30} color="black" />
          <View style={styles.addreddTextArea}>
            <Text style={styles.address}>Delivery Address</Text>
            <Text style={styles.addressSub}>You can change it from here</Text>
          </View>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  deliveryAdd: {
    flexDirection: 'row',
    backgroundColor: Colors.light.lightGray,
    padding: 10,
    alignItems: 'center',
    margin: 15,
    marginBottom: 8,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  addreddTextArea: {
    marginLeft: 10,
  },
  address: {
    fontWeight: '600',
    fontSize: 17
  },
  addressSub: {
    fontSize: 13,
  },
  friendArea: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    margin: 15,
    marginBottom: 0,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  textArrowWrap: {
    flexDirection: 'row',
  },
})

export default LocationSelection
