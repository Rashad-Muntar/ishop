import React, { ReactNode} from 'react'
import { View, StyleSheet } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

interface Props {
  sheetRef: any
  snaPoints: any
  index: any
  children: ReactNode
  onPandown: any
  style?: any
}
const BottomSheetDrawer = ({
  sheetRef,
  style,
  snaPoints,
  index,
  children,
  onPandown,
}: Props) => {
  return (
    <BottomSheet
      backgroundStyle={style}
      ref={sheetRef}
      index={index}
      snapPoints={snaPoints}
      enablePanDownToClose={onPandown}
      containerHeight={200}
      contentHeight={300}
    >
      <View style={styles.contentContainer}>{children}</View>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    paddingHorizontal: 18,
  },
})

export default BottomSheetDrawer
