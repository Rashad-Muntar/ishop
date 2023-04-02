import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Search from '../../../shared/Search'
import { GiChickenOven } from 'react-icons/gi'
import { getCategory } from '../../../graphql/queries'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '../../../shared/Constants'
import SubCategoryList from '../SubCategoryList'
import StoreCard from './StoreCard'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useGetCategoryQuery } from '../../../generated/graphql'

const Store = () => {
  const navigation = useNavigation()
  const [categoryData, setCategoryData] = useState()
  const route = useRoute()
  const item = route.params

  const { data, loading, error } = useGetCategoryQuery({
    variables: {
      getCategoryId: item?.item?.id,
    },
  })

  // const getCategoryFunc = async () => {
  //   const category = await API.graphql(
  //     graphqlOperation(getCategory, { id: item?.item?.id })
  //   )
  //   setCategoryData(category.data.getCategory.stores)
  // }
  // console.log(categoryData)
  // console.log()
  // useEffect(() => {
  //   getCategoryFunc()
  // }, [])
  return (
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <TouchableOpacity style={styles.backWrap} onPress={navigation.goBack}>
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
        <Search placeholder="Search for groceries" height="100%" width="80%"/>
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
    width: '93%',
  },
  searchWrap: {
    height: 50,
    marginTop: 20,
    marginBottom: 10,
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backWrap: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.textPrimaryBlack50,
    borderRadius: 100,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.light.textPrimaryBlack50
  },
  subCatWrap: {
    marginBottom: 10,
  },
})

export default Store
