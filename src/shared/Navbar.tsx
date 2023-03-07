import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { EvilIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { Colors } from './Constants'

const Navbar = () => {
  const navigation = useNavigation()
 //navigation.dispatch(DrawerActions.openDrawer())
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Ionicons
          name="md-grid-outline"
          size={24}
          color={Colors.light.primaryRed}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.locationWrapper}>
          <EvilIcons
            name="location"
            size={24}
            color={Colors.light.primary}
          />
                  <Text style={styles.location}>Current Location</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </View>
      </View>
      <View>
        <Ionicons
          name="ios-gift-outline"
          size={24}
          color={Colors.light.primary}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: Colors.light.lightGray,
    padding: 10,
    borderRadius: 10,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    location: {
        fontWeight: "700"
    }
})

export default Navbar
