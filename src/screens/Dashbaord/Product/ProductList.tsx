import React, { useRef, useCallback, useMemo, useState, useEffect } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import HeaderImg from '../../../shared/headerImg'
import Search from '../../../shared/Search'

import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  increment,
  decrement,
  removeItem,
} from '../../../../StateManagement/Store/Actions/cart'
import {
  cartTotalPriceSelector,
  cartTotalSelector,
} from '../../../../StateManagement/selectors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useGetProductCategoryQuery } from '../../../generated/graphql'
import Product from './Product'
import Cart from '../../../shared/cart/cart'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import CartItem from '../../../shared/cart/cartItem'

const ProductList = () => {
  const route = useRoute()
  const category = route.params
  const dispatch = useDispatch()
  const sheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['1%', '25%', '50%'], [])
  const cartItems = useSelector((state: any) => state.cart)
  const totalPrice = useSelector(cartTotalPriceSelector)
  const totalItems = useSelector(cartTotalSelector)
  const { data, loading, error } = useGetProductCategoryQuery({
    variables: {
      getProductCategoryId: category?.category?.id,
    },
  })
  data?.getProductCategory?.image

  const handlePresentModalPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
  }, [])

  const handleCartItemDecreament = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id))
      return
    } else {
      dispatch(decrement(item.id))
    }
  }

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.HeaderWrap}>
          <HeaderImg height={200} uriImg={{ uri: data?.getProductCategory?.image }}>
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
                  source={{ uri: data?.getProductCategory?.image }}
                />
                <Text style={styles.name}>
                  {data?.getProductCategory?.title}
                </Text>
              </View>
            </View>
          </HeaderImg>
        </View>
        <View style={styles.ctWrap}>
          <View style={styles.searchWrap}>
            <Search width="100%" placeholder="Search in Walmart" />
          </View>
          <View style={styles.cardWrapper}>
            {data?.getProductCategory?.products?.items.map((item, index) => (
              <Product
                key={index}
                title={item?.title}
                img={item?.image}
                price={item?.price}
                detail={item?.detail}
                onAddToCart={() =>
                  dispatch(
                    addToCart({
                      title: item?.title,
                      price: item?.price,
                      id: item?.id,
                      image: item?.image,
                    })
                  )
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <Cart
        onOpenCart={() => navigation.navigate('Cart')}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
      <BottomSheetDrawer sheetRef={sheetRef} snaPoints={snapPoints} index={0}>
        {cartItems.map((item: any, index: any) => (
          <CartItem
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            onDecrease={() => handleCartItemDecreament(item)}
            onIncrease={() => dispatch(increment(item.id))}
          />
        ))}
      </BottomSheetDrawer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
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
    width: '95%',
    padding: '5%',
    position: 'absolute',
    bottom: 0,
    top: '55%',
    left: '2.5%',
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
    padding: 9,
    marginTop: 25,
    position: 'absolute',
  },
  searchWrap: {
    width: '70%',
  },
})

export default ProductList
