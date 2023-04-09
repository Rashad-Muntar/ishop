import React, { useMemo, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import { Colors } from '../../../shared/Constants'
import { AntDesign } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import PrimaryButton from '../../../shared/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'

const MenuScreen = () => {
  const snapPoints = useMemo(() => ['81%'], [])
  const user = useSelector((state) => state.user)
  const navigation = useNavigation()
  const sheetRef = useRef<BottomSheet>(null)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <AntDesign
            onPress={() => navigation.navigate('Categories')}
            name="closecircleo"
            size={35}
            color={Colors.light.textPrimaryBlack}
          />
          <PrimaryButton bg={Colors.light.primary} title="Talk to us" />
        </View>
        <View style={styles.nameArea}>
          <Text style={styles.welcome}>Hi Rashad!</Text>
        </View>
      </View>
      <View style={styles.menuContent}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
    height: '25%',
    alignItems: 'center',
    // backgroundColor: Colors.light.primary50,
  },
  btnArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 25,
    fontWeight: '700',
    color: Colors.light.textPrimaryBlack,
  },

  nameArea: {
    width: '100%',
    marginTop: 30,
  },
  menuContent: {
    backgroundColor: 'white',
    height: '75%',
    width: '100%',
    // borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
  },
})

export default MenuScreen
