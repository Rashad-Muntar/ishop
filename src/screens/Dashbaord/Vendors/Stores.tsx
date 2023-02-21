import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from '../../../shared/Search'
import { GiChickenOven } from 'react-icons/gi'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '../../../shared/Constants'
import SubCategoryList from '../SubCategoryList'
import StoreCard from './StoreCard'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useGetCategoryQuery } from '../../../generated/graphql'

const Store = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const item = route.params

  const { data, loading, error } = useGetCategoryQuery({
    variables: {
      getCategoryId: item?.item?.id,
    },
  })
  return (
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <View style={styles.backWrap}>
          <AntDesign
            name="back"
            size={24}
            color="black"
            onPress={navigation.goBack}
          />
        </View>
        <Search placeholder="Search for groceries" />
      </View>

      <View style={styles.mainContent}>
        <View style={styles.subCatWrap}>
          <SubCategoryList />
        </View>

        {data?.getCategory?.stores?.items.map((store, index) => (
          <StoreCard
            key={index}
            onPress={() => navigation.navigate('StoreFront', { store })}
            title={store?.storeName}
            image={store?.headerImg}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  mainContent: {
    width: '90%',
  },
  searchWrap: {
    marginTop: 20,
    marginBottom: 10,
    width: '87%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  backWrap: {
    marginRight: 12,

    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 100,
    padding: 8,
  },
  subCatWrap: {
    marginBottom: 10,
  },
})

export default Store
