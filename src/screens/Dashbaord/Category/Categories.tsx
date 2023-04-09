import React, { useEffect, useState, useMemo, useRef } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Spinner from '../../../shared/Spinner'
import { API, graphqlOperation } from 'aws-amplify'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Navbar from '../../../shared/Navbar'
import Category from '../Category/Category'
import { Colors } from '../../../shared/Constants'
import { listCategories } from '../../../graphql/queries'
import { useListCategoriesQuery } from '../../../generated/graphql'
import { Camera, CameraType } from 'expo-camera'
import { Audio } from 'expo-av'
import { useNavigation } from '@react-navigation/native'
import HeaderArea from './HeaderArea'
import FavouriteBottomSheet from './FavouriteBottomSheet'
import MenuBottomSheet from './menuScreen'

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState()
  const [pusToken, setPushToken] = useState()
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState(CameraType.back)
  const [recording, setRecording] = React.useState()
  const [permission, requestPermission] = Camera.useCameraPermissions()
  
  const getAllCategories = async () => {
    setLoading(true)
    try {
      const cats = await API.graphql(graphqlOperation(listCategories))
      setCategoriesData(cats.data.listCategories.items)
      setLoading(false)
    } catch (error) {
      return error
    }
  }
  useEffect(() => {
    getAllCategories()
  }, [])

  useEffect(() => {
    if (!permission) {
      console.log('permissions')
    }
    if (!permission?.granted) {
      console.log('permissions')
    }
  }, [])

  useEffect(() => {
    startRecording()
  }, [])

  async function startRecording() {
    try {
      const { status } = await Audio.requestPermissionsAsync()
      if (status !== 'granted') {
        return 'Permission not granted'
      }
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      {loading && <Spinner />}
      <HeaderArea />
      <View style={styles.cardWrapper}>
        {categoriesData?.map((item, index) => (
          <Category
            key={index}
            title={item?.title}
            image={item?.image}
            onPress={() => navigation.navigate('Stores', { item })}
            color={Colors.Category[index]}
          />
        ))}
      </View>
      <FavouriteBottomSheet />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginTop: 60,
    width: '95%',
  },
  sheetStyle: {
    backgroundColor: Colors.light.primary100,
    borderTopRightRadius: 100,
  },
})

export default Categories
