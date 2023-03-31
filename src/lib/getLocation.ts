import * as Location from 'expo-location'

const GetLocation = (location) => {
    let addressResponse = null
    ;(async () => {
        try {
          if (location) {
            ;(async () => {
              addressResponse = await Location.reverseGeocodeAsync({
                latitude: location.latitude,
                longitude: location.longitude,
              })
  
            //   dispatch(setLocationDetails(addressResponse[0]))
            })()
          }
            return addressResponse[0]
        } catch (error) {
          console.log(error.message)
        }
      })()
}

export default GetLocation