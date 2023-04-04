import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from './Constants'

interface Props {
  placeholder: string
  width: String
}
const Search = ({ placeholder, width }: Props) => {
  const [text, setText] = useState('')

  return (
    <View style={{ ...styles.container, width }} >
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
    backgroundColor: Colors.light.textPrimaryBlack50,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    height: 50,
    elevation: 5,
    borderWidth: 1,
    borderColor: Colors.light.textPrimaryBlack50
  },
  input: {
    height: 40,
    paddingHorizontal: 15,
    fontWeight: "600",
    fontSize: 15
  },
})

export default Search
