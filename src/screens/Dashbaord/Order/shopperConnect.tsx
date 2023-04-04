import React, { useRef, useMemo, useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Modal,
  Pressable,
} from 'react-native'
import MapScreen from '../Map/mapView'
import { AntDesign } from '@expo/vector-icons'
import LocationSearch from '../../../shared/LocationSearch'
import { useCreateOrderMutation } from '../../../generated/graphql'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import BottomSheet from '@gorhom/bottom-sheet'
import CustomAlert from '../../../shared/newAlert'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../../shared/Constants'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import FindDriverProgress from '../../../shared/FindDriverProgress'
import OrderPeriod from './orderPeriod'

const ShopperConnect = () => {
  const sheetRef = useRef<BottomSheet>(null)
  const [connectShopper, setConnectShoper] = useState(false)
  const [createOrder, { data }] = useCreateOrderMutation()
  const [connectProgress, setConnectProgress] = useState(0)
  const orderNote = useSelector((state) => state.order)
  const store = useSelector((state) => state.store)
  const user = useSelector((state) => state.user)
  const orderTime = useSelector((state) => state.order)
  const [isOrderCreated, setIsOrderCreated] = useState(false)
  console.log(store)
  const snapPoints = useMemo(() => ['40%'], [])
  const locationDetail = useSelector((state) => state.locationDetail)
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [time, setTime] = useState()
  const [dist, setDist] = useState()

  console.log(orderTime.orderTime)

  useEffect(() => {
    if (Object.keys(locationDetail.distance).length !== 0) {
      setTime(locationDetail.distance.distance.toFixed(2))
      setDist(locationDetail.distance.duration.toFixed(2))
    }
  }, [locationDetail.distance])

  const createOrderFunc = async () => {
    try {
      await createOrder({
        variables: {
          input: {
            isCancel: false,
            isDelivered: false,
            isPicked: false,
            onGoing: false,
            orderNote: orderNote,
            storeOrdersId: store.storeId,
            shopperId: "9b32b0ec-3319-455b-bb08-09e31d3c49cb",
            shopperOrdersId: "9b32b0ec-3319-455b-bb08-09e31d3c49cb",
            clientOrdersId: user.userId,
            startTime: orderTime.orderTime
          },
        },
      })
      console.log(data)
      setIsOrderCreated(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

  })

  const onConnectShopperHandler = () => {
    if (orderTime.orderTime === null) {
      return CustomAlert(
        'Date & time not selected',
        'You need to select date and time for delivery'
      )
    }
    createOrderFunc()
    setConnectShoper(!connectShopper)
    setConnectProgress(0.0000001)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.wrap}>{!connectShopper && <LocationSearch />}</View>
        <MapScreen />
        <BottomSheetDrawer
          snaPoints={snapPoints}
          sheetRef={sheetRef}
          index={0}
          onPandown={false}
        >
          <View style={styles.sheetContent}>
            {connectShopper ? (
              <FindDriverProgress loadingProgress={connectProgress} />
            ) : (
              <>
                <View style={styles.journeyDetails}>
                  <Text style={styles.city}>
                    {locationDetail.location.city}
                  </Text>
                  <Text style={styles.distance}>{time}km</Text>
                  <Text style={styles.distance}>{dist}Min.</Text>
                </View>
                <TouchableOpacity
                  style={styles.date}
                  onPress={() => setModalVisible(true)}
                >
                  <Ionicons name="time-outline" size={24} color="black" />
                  <Text style={styles.placeholder}>Pick time and date</Text>
                </TouchableOpacity>
                <Text style={styles.optional}>Optional</Text>
                <TouchableOpacity
                  style={styles.message}
                  onPress={() => navigation.navigate('Order-Details')}
                >
                  <AntDesign
                    name="message1"
                    size={24}
                    color={Colors.light.textPrimaryBlack}
                  />
                  <Text style={styles.placeholder}>
                    {orderNote.note === ''
                      ? 'Leave note for shopper'
                      : orderNote.note}
                  </Text>
                </TouchableOpacity>
              </>
            )}
            <Pressable
              style={{
                ...styles.connect,
                backgroundColor: connectShopper
                  ? Colors.light.lightGray
                  : Colors.light.primary,
              }}
              onPress={onConnectShopperHandler}
            >
              <Text
                style={{
                  ...styles.connectText,
                  color: connectShopper
                    ? Colors.light.textPrimaryBlack
                    : Colors.light.whiteText,
                }}
              >
                {connectShopper ? 'Cancel Search' : 'Find Shopper'}
              </Text>
            </Pressable>
          </View>
        </BottomSheetDrawer>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <OrderPeriod closeModal={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
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
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 50,
    fontWeight: '700',
    alignItems: 'center',
  },
  connectText: {
    fontSize: 17,
    fontWeight: '700',
  },
  sheetContent: {
    height: '100%',
    width: '98%',
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
  optional: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 3,
    fontSize: 10,
    color: Colors.light.primaryRed,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
    borderRadius: 70,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default ShopperConnect
