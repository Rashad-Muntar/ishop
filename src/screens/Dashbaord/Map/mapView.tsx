import React, { useState, useRef, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import GetLocation from '../../../lib/getLocation'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { listShoppers } from '../../../graphql/queries'
import { onShopperLocationUpdate } from '../../../graphql/subscriptions'
import * as Location from 'expo-location'
import { mapStyle } from '../../../shared/MapStyles'
import LocationPermission from '../../../lib/locationPermissino'
import {
  setLocationDetails,
  setLocationDistance,
} from '../../../../StateManagement/Store/Actions/locationDetails'
import { storeToShop } from '../../../shared/data'
import { Colors } from '../../../shared/Constants'
import { useSelector, useDispatch } from 'react-redux'

const MapScreen = () => {
  const dispatch = useDispatch()
  const [shoppers, setShoppers] = useState()
  const [shopperChange, setShopperChange] = useState()
  const { width, height } = Dimensions.get('window')
  const loc = useSelector((state) => state.location)

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
  const [errorMsg, setErrorMsg] = useState('')
  const mapRef = useRef(1)

  const getAllShoppers = async () => {
    try {
      const shoppers = await API.graphql(graphqlOperation(listShoppers))
      setShoppers(shoppers.data.listShoppers.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllShoppers()
  }, [shopperChange])

  const checkShopperPositionHandler = () => {
    API.graphql(
      graphqlOperation(onShopperLocationUpdate)
    ).subscribe({
      next: (payload: any) => {
        setShopperChange(payload)
      },
    })
  }

  useEffect(() => {
    checkShopperPositionHandler()
  }, [])

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      if (Object.keys(loc.location).length === 0) {
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      } else {
        setLocation({
          latitude: loc.location.lat,
          longitude: loc.location.lng,
        })
      }
    })()
  }, [loc])

  useEffect(() => {
    const address = GetLocation(location)
    dispatch(setLocationDetails(address))
  }, [location])


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="padding">
          <MapView
            ref={mapRef}
            followsUserLocation={true}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            zoomEnabled={true}
            toolbarEnabled={true}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            {shoppers?.map((car, index) => {
              if (car?.latitude !== null && car?.longitude !== null) {
                return (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: car?.latitude,
                      longitude: car?.longitude,
                    }}
                    image={require('../../../../assets/Solids/delivery.png')}
                  />
                )
              }
            })}

            <Marker
              anchor={{ x: 0.5, y: 0.5 }}
              coordinate={location}
              image={require('../../../../assets/Solids/location.png')}
            />
            <Marker
              anchor={{ x: 0.5, y: 0.5 }}
              coordinate={storeToShop}
              image={require('../../../../assets/Solids/store2.png')}
            />
            <MapViewDirections
              origin={storeToShop}
              destination={location}
              apikey="AIzaSyDsz1c179pD7OCWT_EmMs5cueUhMVve2gY"
              strokeWidth={4}
              optimizeWaypoints={true}
              strokeColor={Colors.light.primary}
              onReady={(result) => {
                dispatch(
                  setLocationDistance({
                    distance: result.distance,
                    duration: result.duration,
                  })
                )
                console.log(`Distance: ${result.distance} km`)
                console.log(`Duration: ${result.duration} min.`)

                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 20,
                    left: width / 20,
                    top: height / 20,
                  },
                })
              }}
              retryOptions={{
                attempts: 5,
                delay: 1000,
                retryOnTimeout: true,
                retryOnConnectionLost: true,
              }}
              onError={(errorMessage) => {
                console.log(errorMessage)
              }}
            />
          </MapView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '65%',
    backgroundColor: 'grey',
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
export default MapScreen
