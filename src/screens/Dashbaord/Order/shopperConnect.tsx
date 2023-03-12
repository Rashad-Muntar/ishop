import React, { useRef, useCallback, useMemo, useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native'
import MapScreen from '../Map/mapView'
import LocationSearch from '../../../shared/LocationSearch'
import BottomSheetDrawer from '../../../shared/BottomSheet'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { Colors } from '../../../shared/Constants'

const ShopperConnect = () => {
  const sheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['35%'], [])
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <LocationSearch />
      </View>
      <MapScreen />
      <BottomSheetDrawer
        snaPoints={snapPoints}
        sheetRef={sheetRef}
        index={0}
        onPandown={false}
      >
        <View style={styles.sheetContent}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.message}
            placeholder="Any message for your shooper?"
            // onChangeText={(text) => this.setState({ text })}
            // value={this.state.text}
          />
          <TouchableOpacity style={styles.connect}>
            <Button
              color={Colors.light.whiteText}
              title="Connect with iShopper"
            />
          </TouchableOpacity>
        </View>
      </BottomSheetDrawer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrap: {
    marginTop: 5,
    zIndex: 2,
    position: 'absolute',
    width: '90%',
  },

  connect: {
    backgroundColor: Colors.light.primary,
    color: Colors.light.whiteText,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 50,
    fontWeight: '700',
  },
  sheetContent: {
    height: '100%',
    width: '98%',
    alignItems: 'center',
    position: 'relative',
  },
  message: {
    backgroundColor: Colors.light.lightGray,
    width: "100%",
    height: 80,
    borderRadius: 10
  }
})

export default ShopperConnect
