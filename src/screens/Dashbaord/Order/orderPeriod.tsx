import React, { useRef, useMemo, useState, useEffect } from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import { setOrderTime } from '../../../../StateManagement/Store/Actions/orderAction'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../../shared/Constants'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'

interface Props {
  closeModal: () => void
}
const OrderPeriod = ({ closeModal }: Props) => {
  const [date, setDate] = useState(new Date())
  const [formatDate, setFormatDate] = useState()
  const dispatch = useDispatch()
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event:any, selectedDate:any) => {
    const currentDate = selectedDate
    const stringifyDate = JSON.stringify(currentDate)
    dispatch(setOrderTime({orderTime: stringifyDate}))
    setShow(false)
    setDate(currentDate)
    console.log(typeof stringifyDate)
    // const me = format(currentDate, 'MMMM d, yyyy')
    // const formatTime = format(date, 'H:m')
    // console.log(me, formatTime)
  }

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false)
    }
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
    setShow(true)
  }

  const showTimepicker = () => {
    showMode('time')
    setShow(true)
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        {Platform.OS === 'android' && (
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
          <View>
            <View style={styles.headingArea}>
              <View>
                <Text style={styles.dateTimeHeading}>Pick data and time</Text>
                <Text>Pick date and time of delivery</Text>
              </View>
              <Ionicons
                onPress={closeModal}
                name="close"
                size={28}
                color="black"
              />
            </View>

            <DateTimePicker
              value={date}
              mode="datetime"
              is24Hour={true}
              display="spinner"
              onChange={onChange}
            />
          </View>
        )}
        <View style={styles.connectWrap}>
          <Pressable style={styles.connect}>
            <Text style={{ color: Colors.light.whiteText }}>Submit</Text>
          </Pressable>
          <Pressable style={styles.cancel} onPress={closeModal}>
            <Text style={{ color: Colors.light.textPrimaryBlack }}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  message: {
    backgroundColor: Colors.light.lightGray,
    width: '100%',
    height: 90,
    borderRadius: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: Colors.light.primary,
  },
  noteWrapper: {
    marginTop: 15,
  },
  dateTimeHeading: {
    fontWeight: '800',
    fontSize: 20,
  },
  contentWrap: {
    width: '90%',
  },
  connect: {
    backgroundColor: Colors.light.primary,
    color: Colors.light.whiteText,
    width: '35%',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    fontWeight: '700',
    alignItems: 'center',
  },
  cancel: {
    backgroundColor: Colors.light.lightGray,
    color: Colors.light.whiteText,
    width: '35%',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    fontWeight: '700',
    alignItems: 'center',
  },
  connectWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default OrderPeriod
