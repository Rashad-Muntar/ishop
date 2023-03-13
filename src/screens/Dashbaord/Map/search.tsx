import React, { useState, useRef } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Colors } from '../../../shared/Constants'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { setLocation } from '../../../../StateManagement/Store/Actions/locationAction'
import { useDispatch} from 'react-redux'

const SearchView = () => {
  const [search, setSearch] = useState('')
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const updateSearch = (search: any) => {
    setSearch(search)
  }
  const containerStyle = {
    backgroundColor: 'none',
    border: 'none',
  }
  return (
    <View style={styles.cont}>
      <View style={styles.topIcons}>
        <AntDesign
          name="back"
          size={24}
          color={Colors.light.textPrimaryBlack}
          onPress={() => {
            navigation.goBack()
          }}
        />
        <AntDesign
          name="close"
          size={24}
          color={Colors.light.textPrimaryBlack}
          onPress={() => {
            navigation.goBack()
          }}
        />
      </View>

      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Enter delivery location"
          onPress={(data, details = null) => {
            console.log(details)
            dispatch(setLocation(details?.geometry.location))
            navigation.goBack()
          }}
          autoFocus={true}
          listViewDisplayed="auto"
          query={{
            key: 'AIzaSyAmOcbGeGi_0tp5hIUHWKGCARusI7nQFKg',
            language: 'en',
          }}
          fetchDetails={true}
          debounce={200}
       
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch" 
          enablePoweredByContainer={true}
          styles={{
            textInputContainer: {
              width: '100%',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 5,
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,
              borderWidth: 1,
              borderColor: Colors.light.primary,
              borderRadius: 100,
            },
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    marginTop: 10,
    paddingHorizontal: 20,
    flex: 1,

  },
  container: {
    backgroundColor: Colors.light.whiteText,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topIcons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  back: {
    marginLeft: 10,
  },
  add: {
    marginRight: 10,
  },
})

export default SearchView
