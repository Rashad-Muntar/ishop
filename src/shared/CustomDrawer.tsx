import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { format } from 'date-fns'
import { Colors } from './Constants'
import { DrawerActions } from '@react-navigation/routers'
import { useNavigation } from '@react-navigation/native'
import MenuList from './MenuList'

const CustomDrawer = () => {
  const date = format(new Date(), 'MMM. do yyyy')
  const time = format(new Date(), 'k: mmaaa')
  const navigation = useNavigation()

  const logoutHandler = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <SimpleLineIcons name="close" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.userWrapper}>
          <View style={styles.user} />

          <View>
            <Text style={styles.name}>Rashad</Text>
            <TouchableOpacity>
              <Text style={styles.edit}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <MenuList />
      <View>
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaTitle}>Become an iShopper</Text>
          <Text style={styles.ctaDesc}>Earn money on your schedule</Text>
        </View>
        <TouchableOpacity onPress={logoutHandler} style={styles.logoutWrapper}>
          <Text>Logout</Text>
          <View style={styles.logoutIcon}>
            <AntDesign name="logout" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    paddingBottom: '7%',
    paddingLeft: '7%',
    paddingRight: '7%',
    justifyContent: 'space-between',
  },
  close: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  userWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    height: 50,
    width: 50,
    backgroundColor: Colors.light.lightGray,
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    fontWeight: '700',
  },
  edit: {
    color: Colors.light.primary,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: '10%',
    marginBottom: '3%',
  },
  time: {
    fontSize: 25,
    fontWeight: '800',
  },
  logoutWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon: {
    backgroundColor: Colors.light.lightGray,
    padding: '3%',
    borderRadius: 100,
    marginLeft: '4%',
  },
  ctaContainer: {
    backgroundColor: Colors.light.primary,
    padding: '5%',
    borderRadius: 10,
    marginBottom: 20,
  },
  ctaTitle: {
    color: Colors.light.whiteText,
    fontWeight: '700',
    fontSize: 15,
    marginBottom: '3%',
  },
  ctaDesc: {
    fontSize: 12,
  },
})

export default CustomDrawer
