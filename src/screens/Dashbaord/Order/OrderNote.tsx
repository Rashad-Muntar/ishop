import React, { useEffect, useState } from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderNote } from '../../../../StateManagement/Store/Actions/orderNoteAction'
import { Colors } from '../../../shared/Constants'

function OrderNote() {
  const [inputText, setInputText] = useState('')
  const note = useSelector(state => state.orderNote)
  
  const dispatch = useDispatch()

  const onChageHander = (e) => {
    setInputText(e)
  }
  const submitHandler = () => {
    dispatch(setOrderNote(inputText))
  }

  useEffect(() => {
    console.log(note)
  }, [note])
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrap}>
        <View style={styles.noteWrapper}>
          <Text style={styles.dateTimeHeading}>Add note for shopper</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.message}
            placeholder="Any message for your shopper?"
            autoFocus={true}
            onChangeText={onChageHander}
            // onChangeText={(text) => this.setState({ text })}
            value={inputText}
          />
          <TouchableOpacity style={styles.connect} >
            <Button color={Colors.light.whiteText} title="Submit" onPress={submitHandler}/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
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
    width: '95%',
  },
  connect: {
    backgroundColor: Colors.light.primary,
    color: Colors.light.whiteText,
    // position: 'absolute',
    width: '100%',
    // bottom: 0,
    marginTop: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 50,
    fontWeight: '700',
  },
})

export default OrderNote
