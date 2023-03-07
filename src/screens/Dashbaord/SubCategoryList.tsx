import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import SubCaterory from '../../shared/SubCaterory'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../shared/Constants'
const SubCategoryList = () => {
  return (
    <View style={styles.container}>
      <SubCaterory
        title="Meat"
        image={
          <MaterialCommunityIcons
            name="food-turkey"
            size={24}
            color={Colors.light.textPrimaryBlack}
          />
        }
      />
      <SubCaterory
        title="Drinks"
        image={
          <FontAwesome5
            name="wine-bottle"
            size={24}
            color={Colors.light.textPrimaryBlack}
          />
        }
      />
      <SubCaterory
        title="Drinks"
        image={
          <MaterialIcons
            name="pets"
            size={24}
            color={Colors.light.textPrimaryBlack}
          />
        }
      />
      <SubCaterory
        title="All"
        image={
          <Ionicons
            name="ios-grid-outline"
            size={24}
            color={Colors.light.textPrimaryBlack}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default SubCategoryList
