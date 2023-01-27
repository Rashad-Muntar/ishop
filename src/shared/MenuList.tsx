import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { View, StyleSheet, Text } from 'react-native'
import { Colors } from './Constants'
import MenuItem from './MenuItem'

const MenuList = () => {
  return (
    <View>
      <MenuItem
        title="My Bookings"
        icon={<Feather name="shopping-bag" size={24} color="black" />}
      />
      <MenuItem
        title="History"
        icon={<MaterialIcons name="history" size={24} color="black" />}
      />
      <MenuItem
        title="FAQ"
        icon={<AntDesign name="questioncircleo" size={24} color="black" />}
      />
      <View style={styles.line} />
      <MenuItem
        title="Invite and earn"
        icon={
          <Ionicons
            name="ios-gift-outline"
            size={24}
            color={Colors.light.primary}
          />
        }
      />
      <MenuItem
        title="Notifications"
        icon={<Ionicons name="notifications-outline" size={24} color="black" />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: Colors.light.lightGray,
    borderBottomWidth: 1,
    width: '100%',
  },
})
export default MenuList
