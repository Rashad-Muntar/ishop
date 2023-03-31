import * as Location from 'expo-location'

const LocationPermission = (customLocation:any) => {
  ;(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.log('Permission to access location was denied')
      return
    }
    let location = await Location.getCurrentPositionAsync({})
    if (Object.keys(customLocation.location).length === 0) {
      //   setLocation({
      //     latitude: location.coords.latitude,
      //     longitude: location.coords.longitude,
      //   })
      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }
    } else {
      return {
        latitude: customLocation.location.lat,
        longitude: customLocation.location.lng,
      }
    //   setLocation({
    //     latitude: customLocation.location.lat,
    //     longitude: customLocation.location.lng,
    //   })
    }
  })()
}

export default LocationPermission
