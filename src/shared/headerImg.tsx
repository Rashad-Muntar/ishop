import React, { ReactNode } from 'react'
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
import { AntDesign } from '@expo/vector-icons'

interface Props {
  uriImg?: string
  localImg?: string
  children?: ReactNode
  height: string
}
const HeaderImg = ({ uriImg, localImg, height, children }: Props) => {
  return (
    <View style={{ ...styles.HeaderWrap, height: height }}>
      <View style={styles.hd}>
        {uriImg != null ? (
          <ImageBackground source={{ uri: uriImg }} style={styles.HeaderImg} />
        ) : (
          <ImageBackground
            source={localImg}
            style={styles.HeaderImg}
          />
        )}
        {children}
      </View>
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
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
  },
  HeaderImg: {
    width: '100%',
    height: "100%",
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

export default HeaderImg
