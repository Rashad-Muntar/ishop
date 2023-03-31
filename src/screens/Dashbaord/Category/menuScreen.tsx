import React, { useMemo, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import { Colors } from '../../../shared/Constants'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'

const MenuScreen = () => {
  const snapPoints = useMemo(() => ['81%'], [])
  const sheetRef = useRef<BottomSheet>(null)
  return (
      <View>
        <Text>sdfsdfsdfsdfsdfsd</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  selectCat: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: '3%',
    paddingTop: '8%',
  },
  cardWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 60,
    width: '95%',
  },
  sheetStyle: {
    backgroundColor: Colors.light.primary50,
    borderTopRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 5,
  },
  SheetHeading: {
    fontWeight: '600',
    fontSize: 17,
  },
  headingWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

export default MenuScreen
