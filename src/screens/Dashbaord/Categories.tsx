import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Navbar from '../../shared/Navbar'
import Category from './Category'
import { Colors } from '../../shared/Constants'
// import cat1 from  "../../../assets/Solids/house.png"

const Categories = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.selectCat}>Select Category</Text>
      <View style={styles.cardWrapper}>
      <Category
        image={require("../../../assets/Solids/grocery.png")}
        color={Colors.Category.cat1}
      />
      <Category
        image={require("../../../assets/Solids/house.png")}
        color={Colors.Category.cat2}
      />
      <Category
        image={require("../../../assets/Solids/dress.png")}
        color={Colors.Category.cat3}
      />
      <Category
        image={require("../../../assets/Solids/ring.png")}
        color={Colors.Category.cat4}
      />
      <Category
        image={require("../../../assets/Solids/car.png")}
        color={Colors.Category.cat5}
      />
      <Category
        image={require("../../../assets/Solids/electronics.png")}
        color={Colors.Category.cat6}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectCat: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: '3%',
    paddingTop: '8%',
  },
  cardWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30
  }
})

export default Categories
