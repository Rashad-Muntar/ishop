import React, { useRef, useMemo, useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Text,
  Platform,
} from 'react-native'
import MapScreen from '../Map/mapView'
import { AntDesign } from '@expo/vector-icons'
import LocationSearch from '../../../shared/LocationSearch'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import BottomSheet from '@gorhom/bottom-sheet'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Colors } from '../../../shared/Constants'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const ShopperConnect = () => {
  const sheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['40%'], [])
  const locationDetail = useSelector((state) => state.locationDetail)
  const navigation = useNavigation()
  const [time, setTime] = useState()
  const [dist, setDist] = useState()
  console.log(locationDetail.distance.distance)

  useEffect(() => {
    if (Object.keys(locationDetail.distance).length !== 0) {
      setTime(locationDetail.distance.distance.toFixed(2))
      setDist(locationDetail.distance.duration.toFixed(2))
    }
  }, [locationDetail.distance])

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <LocationSearch />
      </View>
      <MapScreen />
      <BottomSheetDrawer
        snaPoints={snapPoints}
        sheetRef={sheetRef}
        index={0}
        onPandown={false}
      >
        <View style={styles.sheetContent}>
          {/* <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.message}
            placeholder="Any message for your shopper?"
            // onChangeText={(text) => this.setState({ text })}
            // value={this.state.text}
          /> */}
          <View style={styles.journeyDetails}>
            <Text style={styles.city}>{locationDetail.location.city}</Text>
            <Text style={styles.distance}>{dist}km</Text>
            <Text style={styles.distance}>{time}Min.</Text>
          </View>
          <TouchableOpacity style={styles.date} onPress={() => navigation.navigate("Order-Details")}>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text style={styles.placeholder}>Pick time and date</Text>
          </TouchableOpacity>
          <View style={styles.message}>
            <AntDesign
              name="message1"
              size={24}
              color={Colors.light.textPrimaryBlack}
            />
            <Text style={styles.placeholder}>Leave note for shopper</Text>
          </View>
          <TouchableOpacity style={styles.connect}>
            <Button
              color={Colors.light.whiteText}
              title="Connect with iShopper"
            />
          </TouchableOpacity>
        </View>
      </BottomSheetDrawer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrap: {
    marginTop: 5,
    zIndex: 2,
    position: 'absolute',
    width: '90%',
  },

  connect: {
    backgroundColor: Colors.light.primary,
    color: Colors.light.whiteText,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 50,
    fontWeight: '700',
  },
  sheetContent: {
    height: '100%',
    width: '98%',
    alignItems: 'center',
    position: 'relative',
  },
  message: {
    backgroundColor: Colors.light.lightGray,
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.light.primary,
    marginBottom: 10,
  },
  placeholder: {
    marginLeft: 10,
    color: Colors.light.textPrimaryBlack,
  },
  journeyDetails: {
    marginVertical: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  city: {
    fontSize: 20,
    fontWeight: '600',
  },
  distance: {
    fontWeight: '600',
  },
})

export default ShopperConnect
