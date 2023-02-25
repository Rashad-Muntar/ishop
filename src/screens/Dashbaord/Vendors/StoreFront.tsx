import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { Colors } from '../../../shared/Constants'
import Search from '../../../shared/Search'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import ProductCategory from '../Product/ProductCategory'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useGetStoreQuery } from '../../../generated/graphql'

const StoreFront = () => {
  const route = useRoute()
  const store = route.params

  const { data, loading, error } = useGetStoreQuery({
    variables: {
      getStoreId: store?.store?.id,
    },
  })

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.HeaderWrap}>
          <View style={styles.hd}>
            <ImageBackground
              source={{ uri: data?.getStore?.headerImg }}
              style={styles.HeaderImg}
            />
            <TouchableOpacity
              style={styles.backWrap}
              onPress={navigation.goBack}
            >
              <AntDesign name="back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.storeDesc}>
              <View style={styles.smImgWrap}>
                <Image
                  style={styles.smImage}
                  source={{ uri: data?.getStore?.logo }}
                />
                <Text style={styles.name}>Walmart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ctWrap}>
          <View style={styles.searchWrap}>
            <Search placeholder="Search in Walmart" />
          </View>
          <View style={styles.cardWrapper}>
            {data?.getStore?.productCategories?.items.map((category, index) => (
              <ProductCategory key={index} onPress={() => navigation.navigate("Products", {category})} title={category?.title} img={category?.image} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
  },
  HeaderWrap: {
    flex: 1,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
  },
  HeaderImg: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },
  hd: {
    width: '100%',
  },
  storeDesc: {
    height: '60%',
    width: '90%',
    padding: '5%',
    position: 'absolute',
    bottom: 0,
    top: '55%',
    left: '5%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
  },
  smImgWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smImage: {
    width: 50,
    marginRight: '3%',
    height: 50,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  ctWrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },
  mainContentWrap: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardWrapper: {
    width: '90%',
    marginTop: '7%',
  },
  backWrap: {
    marginRight: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 100,
    alignSelf: 'flex-start',
    margin: 3,
    marginLeft: 15,
    padding: 8,
    position: 'absolute',
  },
  searchWrap: {
    width: '70%',
  },
})

export default StoreFront
