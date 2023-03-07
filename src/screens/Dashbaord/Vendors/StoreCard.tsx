import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Colors } from '../../../shared/Constants'

interface Props {
  image: any
  title?: string
  delivery?: string
  ails?: string
  onPress?: () => void
}
const StoreCard = ({ image, title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
      <ImageBackground
        imageStyle={{ borderRadius: 15 }}
        source={{ uri: image }}
        style={styles.container}
      >
        <View style={styles.titleWrapper}>
          <View style={styles.ails}>
            <View style={styles.ailWrapper}>
              <Text style={styles.ail}>Pet Food</Text>
            </View>
            <View style={styles.ailWrapper}>
              <Text style={styles.ail}>Bakery</Text>
            </View>
            <View style={styles.ailWrapper}>
              <Text style={styles.ail}>More..</Text>
            </View>
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.deliveryWrapper}>
        <MaterialIcons
          name="delivery-dining"
          size={20}
          color={Colors.light.primary}
        />
        <Text style={styles.delivery}>Estimated Del:</Text>
        <Text style={styles.delivery}>15min</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: '3%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  container: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  overlay: {
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    opacity: 0.3,
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    height: '100%',
    width: '100%',
  },
  delivery: {
    color: Colors.light.textPrimaryBlack,
    fontSize: 12,
    marginLeft: 10,
    fontWeight: '700',
  },
  deliveryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ails: {
    flexDirection: 'row',
    color: Colors.light.whiteText,
  },
  ailWrapper: {
    backgroundColor: 'white',
    borderRadius: 15,
    opacity: 0.7,
    marginLeft: 10,
  },
  ail: {
    paddingHorizontal: 5,
  },
})

export default StoreCard
