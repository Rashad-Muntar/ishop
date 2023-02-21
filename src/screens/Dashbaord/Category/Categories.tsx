import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Navbar from '../../../shared/Navbar'
import Category from '../Category/Category'
import { Colors } from '../../../shared/Constants'
import { useListCategoriesQuery } from '../../../generated/graphql'
import { useNavigation } from '@react-navigation/native'
import { DrawerItemList } from '@react-navigation/drawer'

const Categories = () => {
  const { data, loading, error } = useListCategoriesQuery()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.cardWrapper}>
        {data?.listCategories?.items.map((item, index) => (
          <Category
            key={index}
            title={item?.title}
            image={item?.image}
            onPress={() => navigation.navigate('Stores', { item })}
            color={Colors.Category[index]}
          />
        ))}
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
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
})

export default Categories
