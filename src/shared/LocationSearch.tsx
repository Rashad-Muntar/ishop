import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { Colors } from './Constants'
import { AntDesign } from '@expo/vector-icons'
import { SearchBar } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
// import { VStack, Heading, Input, Icon } from 'native-base'

function LocationSearch() {
  const [search, setSearch] = useState('')
  const navigation = useNavigation()
  const updateSearch = (search: any) => {
    setSearch(search)
  }

  const containerStyle = {
    backgroundColor: 'none',
    border: 'none',
  }
  return (
    <View style={styles.container}>
      <AntDesign
        name="search1"
        size={20}
        color={Colors.light.textPrimaryBlack}
      />
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => navigation.navigate('Delivery-address')}
      >
        <Text>Enter delivery address</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.whiteText,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    height: 45,
    borderWidth: 1,
    borderColor: Colors.light.primary,
  },
  inputContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    width: '85%',
    height: '100%',
    opacity: 0.5,
    fontSize: 11,
    justifyContent: "center"
  },

  back: {
    marginLeft: 10,
  },
  add: {
    marginRight: 10,
  },
})

export default LocationSearch
