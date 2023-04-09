import React, { useRef, useMemo, useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
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
import {
  useCreateOrderMutation,
  useUpdateOrderMutation,
} from '../../../generated/graphql'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import BottomSheet from '@gorhom/bottom-sheet'
import { onUpdateOrder } from '../../../graphql/subscriptions'
import CustomAlert from '../../../shared/newAlert'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../../shared/Constants'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import FindDriverProgress from '../../../shared/FindDriverProgress'
import OrderPeriod from './orderPeriod'
import randomNumber from '../../../utils/randomNumber'
let subs

const ShopperConnect = () => {
  const sheetRef = useRef<BottomSheet>(null)
  const [connectShopper, setConnectShoper] = useState(false)
  const [createOrder] = useCreateOrderMutation()
  const [updateOrder] = useUpdateOrderMutation()
  const [connectProgress, setConnectProgress] = useState(0)
  const orderNote = useSelector((state) => state.order)
  const store = useSelector((state) => state.store)

  const user = useSelector((state) => state.user)
  const orderTime = useSelector((state) => state.order)
  const shoppers = useSelector(state => state.shoppersIds)
  const [isOrderCreated, setIsOrderCreated] = useState(false)
  const [orderStattus, setOrderStattus] = useState()
  const snapPoints = useMemo(() => ['75%'], [])
  const locationDetail = useSelector((state) => state.locationDetail)
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [time, setTime] = useState()
  const [dist, setDist] = useState()

  console.log(shoppers)
  useEffect(() => {
    if (Object.keys(locationDetail.distance).length !== 0) {
      setTime(locationDetail.distance.distance.toFixed(2))
      setDist(locationDetail.distance.duration.toFixed(2))
    }
  }, [locationDetail.distance])

  const _orderMonitoring = () => {
    subs = API.graphql(
      graphqlOperation(onUpdateOrder, {
        filter: {
          clientId: {
            eq: user.userId,
          },
        },
      })
    ).subscribe({
      next: ({ provider, value }) =>
        console.log(value),
        // setOrderStattus(value?.data?.onUpdateOrder),
      error: (error) => console.warn(error),
    })
  }

  const _reassignOrderHandler = async () => {
    try {
      await updateOrder({
        variables: {
          input: {
            id: orderStattus?.id,
            shopperId: orderStattus?.shopperId,
          },
        },
      })
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    if (orderStattus?.isReject === true) {
      _reassignOrderHandler()
    }
  }, [orderStattus])
  // useEffect(() => {
  //   if (data !== undefined && data?.updateOrder?.isAccepted === true) {
  //     navigation.navigate('start-order')
  //   } else if (data !== undefined && data?.updateOrder?.isReject === true) {
  //     setIncommingOrderChange(undefined)
  //   }
  // }, [data])

  useEffect(() => {
    _orderMonitoring()
    return () => {
      subs.unsubscribe()
    }
  }, [])

  const createOrderFunc = async () => {
    const orderCode = randomNumber()
    try {
      await createOrder({
        variables: {
          input: {
            code: orderCode,
            isCancel: false,
            isDelivered: false,
            isPicked: false,
            onGoing: false,
            orderNote: orderNote,
            storeOrdersId: store.storeId,
            clientId: user.userId,
            shopperId: '9b32b0ec-3319-455b-bb08-09e31d3c49cb',
            shopperOrdersId: '9b32b0ec-3319-455b-bb08-09e31d3c49cb',
            clientOrdersId: user.userId,
            startTime: orderTime.orderTime,
          },
        },
      })
      setIsOrderCreated(true)
    } catch (error) {
      return error
    }
  }

  const onConnectShopperHandler = () => {
    if (orderTime.orderTime === null) {
      return CustomAlert(
        'Date & time not selected',
        'You need to select date and time for delivery'
      )
    }
    if (connectShopper === false) {
      createOrderFunc()
    }
    setConnectShoper(!connectShopper)
    setConnectProgress(0.1)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapScreen mapHeight="55%" />
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
