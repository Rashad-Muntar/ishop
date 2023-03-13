import React, { useState } from 'react'
import { View, Button, Text, SafeAreaView, Platform } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
// import DateTimePicker from '@react-native-community/datetimepicker'
import DatePicker from 'react-native-date-picker'

const OrderPeriod = () => {
//   const [date, setDate] = useState(new Date(1598051730000))
//   const [mode, setMode] = useState('date')
//     const [show, setShow] = useState(false)/const [date, setDate] = useState(new Date())
const [date, setDate] = useState(new Date())
const [open, setOpen] = useState(false)
    

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate
//     setShow(false)
//     setDate(currentDate)
//     // let tempDate = new Date(currentDate)
//     // let formatDate
//     console.log(date)
//   }

//   const showMode = (currentMode) => {
//     if (Platform.OS === 'android') {
//       setShow(false)
//     }
//     setMode(currentMode)
//   }

//   const showDatepicker = () => {
//     showMode('date')
//     setShow(true)
//   }

//   const showTimepicker = () => {
//     showMode('time')
//     setShow(true)
//   }
  return (
      <View>
          <Button title="Open" onPress={() => setOpen(true)} />
           <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      {/* </> */}
      
      {/* {Platform.OS === 'android' && (
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
      )}
      {Platform.OS === 'android' ? (
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )
      ) : (
        <DateTimePicker
          //   testID="dateTimePicker"
          value={date}
          mode="datetime"
          is24Hour={true}
          onChange={onChange}
          display="default"
        />
      )} */}
    </View>
  )
}

export default OrderPeriod
