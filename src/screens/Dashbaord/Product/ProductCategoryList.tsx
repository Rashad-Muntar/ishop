import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { Colors } from '../../../shared/Constants'
import Search from '../../../shared/Search'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import ProductCategory from './ProductCategory'
import { useNavigation } from '@react-navigation/native'

const ProductCategoryList = () => {
  const navigation = useNavigation()
  return (
    <ScrollView bounces={true} contentContainerStyle={styles.contentContainer}>
      <View style={styles.HeaderWrap}>
        <ImageBackground
          source={require('../../../../assets/Solids/walmart.jpeg')}
          style={styles.HeaderImg}
        />
        <View style={styles.backWrap}>
          <AntDesign
            name="back"
            size={29}
            color="white"
            onPress={navigation.goBack}
          />
        </View>
        <View style={styles.storeDesc}>
          <View style={styles.smImgWrap}>
            <Image
              style={styles.smImage}
              source={require('../../../../assets/Solids/walmart.jpeg')}
            />
            <Text style={styles.name}>Walmart</Text>
          </View>
        </View>
      </View>
      <View style={styles.ctWrap}>
        <View style={styles.mainContentWrap}>
          <Search placeholder="Search in Walmart" />
          <View style={styles.cardWrapper}>
            <ProductCategory
              title="Babies"
              img={require('../../../../assets/Solids/drink.webp')}
            />
            <ProductCategory
              title="Babies"
              img={require('../../../../assets/Solids/oils.webp')}
            />
            <ProductCategory
              title="Babies"
              img={require('../../../../assets/Solids/alcohol.jpg')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  HeaderWrap: {
    height: '35%',
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
  },
  HeaderImg: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    position: 'absolute',
  },
  storeDesc: {
    height: '55%',
    width: '90%',
    position: 'absolute',
    padding: '5%',
    bottom: 0,
    top: '40%',
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
    width: '100%',
    marginTop: '7%',
  },
  backWrap: {
    marginRight: 12,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 100,
    alignSelf: "flex-start",
    margin: 3,
    padding: 8,
    
  },
})

export default ProductCategoryList
