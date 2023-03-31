import React, {useMemo, useRef } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import { Colors } from '../../../shared/Constants'
import { Entypo } from '@expo/vector-icons';

const FavouriteBottomSheet = () => {
    const snapPoints = useMemo(() => ['20%', '81%'], [])
    const sheetRef = useRef<BottomSheet>(null)
  return (
    <BottomSheetDrawer
      snaPoints={snapPoints}
      style={styles.sheetStyle}
      sheetRef={sheetRef}
      index={0}
      onPandown={false}
    >
      <View style={styles.headingWrapper}>
              <Text style={styles.SheetHeading}>Stores you might like</Text>
              <Entypo name="forward" size={24} color="black" />
      </View>
    </BottomSheetDrawer>
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
        fontWeight: "600",
        fontSize: 17

    },
    headingWrapper: {
        justifyContent: "space-between",
        flexDirection: "row"
    }
})

export default FavouriteBottomSheet
