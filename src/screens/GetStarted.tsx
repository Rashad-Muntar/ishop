import React from 'react'
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Platform,
} from 'react-native'
import { Colors } from '../shared/Constants'

const GetStarted = () => {
  const image = '../../assets/st2.jpg'

  return (
    <View style={styles.container}>
      <ImageBackground source={require(image)} style={styles.image}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Leave it to us focus on you</Text>
          <Text style={styles.subtext}>
          Shop and chill. We offer unbeatable value and comfort at the touch of a button"
          </Text>
          <View style={styles.getStarted}>
            <Button title="Get started" color={Platform.OS ? "white" : Colors.light.primary} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  heading: {
    color: Colors.light.whiteText,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
  },
  subtext: {
    color: Colors.light.tintWhite,
    paddingVertical: '15%',
    textAlign: "center"
  },
  contentContainer: {
    width: '100%',
    bottom: 0,
    position: 'absolute',
    padding: '10%',
  },
  getStarted: {
    borderRadius: 7,
    ...Platform.select({
      android: {
        backgroundColor: 'red',
        borderRadius: 10,
      },
      ios: {
        backgroundColor: 'transparent',
        borderColor: Colors.light.primary,
        borderWidth: 1,
        color: Colors.light.whiteText
      },
    }),
  },
})

export default GetStarted
