import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from './Constants'

interface Props {
  placeholder: string
}
const Search = ({ placeholder }: Props) => {
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color="gray" />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.lightGray,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 15,

  },
})

export default Search
