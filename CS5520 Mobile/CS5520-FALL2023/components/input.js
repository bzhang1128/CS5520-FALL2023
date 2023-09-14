import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react';

const Input = ({ changedHandler}) => {
  const [text, setText] = useState("");

  function changeTextHandler(changedText) {
    console.log(changedText);
    setText(changedText);
  }

  function confirmHandler() {
    // call a function that is passed to me from App.js and pass the enteredText via it
    changedHandler();
  }

  return (
    <View>
      <TextInput 
      style={styles.input}
      onChangeText={changeTextHandler}
      value={text}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderColor: "orange",
    borderWidth: 2,
    width: 200,
  },
})