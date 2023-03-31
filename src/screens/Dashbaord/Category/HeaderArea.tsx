import React, { ReactNode } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native'
import HeaderImg from '../../../shared/headerImg'
import { Colors } from '../../../shared/Constants'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const HeaderArea = () => {
  const navigation = useNavigation()
  const openMenuHandler = () => {
    navigation.navigate("menuScreen")
  }
  return (
    <HeaderImg
      height={'38%'}
      localImg={require('../../../../assets/Solids/baby.jpg')}
    >
      <View style={styles.content}>
        <Pressable style={styles.user} onPress={openMenuHandler}>
          <Feather name="user" size={22} color="black" />
        </Pressable>

        <Text style={styles.headText}>Shopping can never be boring again</Text>
        <Pressable style={styles.storesAround}>
          <AntDesign name="search1" size={18} color={Colors.light.whiteText} />
          <Text style={styles.btnPlaceholder}> Stores around you</Text>
        </Pressable>
        <Pressable style={styles.storeDesc}>
          <View style={styles.smImgWrap}>
            <AntDesign
              name="search1"
              size={20}
              color={Colors.light.textPrimaryBlack}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.searchPlaceHolder}>
              Search for grocery, electronics, clothing...
            </Text>
          </View>
        </Pressable>
      </View>
    </HeaderImg>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 20,
    paddingTop: 30,
    position: 'absolute',

    width: '100%',
  },
  headText: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.light.whiteText,
    marginTop: 10
  },
  storesAround: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 20,
    paddingVertical: 13,
    width: '60%',
    borderRadius: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnPlaceholder: {
    textAlign: 'center',
    color: Colors.light.whiteText,
    fontWeight: '700',
    fontSize: 15,
  },
  storeDesc: {
    height: '34%',
    width: '98%',
    padding: '5%',
    position: 'absolute',
    bottom: 0,
    top: '120%',
    left: '5%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 7,
  },
  searchPlaceHolder: {
    color: Colors.light.textPrimaryBlack,
    opacity: 0.5,
  },
  smImgWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    backgroundColor: Colors.light.primary50,
    opacity: 0.5,
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default HeaderArea
