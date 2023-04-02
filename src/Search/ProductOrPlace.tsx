import React from 'react'
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import Search from '../shared/Search'

const ProductOrPlaceSearch = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
              <View style={styles.container}>
        <Search placeholder='Search for product, vendors or places'/>
    </View>
      </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 20
    }
})
export default ProductOrPlaceSearch
