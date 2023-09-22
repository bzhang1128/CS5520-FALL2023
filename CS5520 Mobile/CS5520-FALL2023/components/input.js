import { Button, Modal, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';

const Input = ({ changedHandler, modalVisibility, hideModal }) => {
  const [text, setText] = useState("");

  function changeTextHandler(changedText) {
    console.log(changedText);
    setText(changedText);
  }

  function confirmHandler() {
    // call a function that is passed to me from App.js and pass the enteredText via it
    changedHandler(text);
    // clear the textinput
    setText("");
  }

  function cancelHandler() {
    hideModal();
  }

  return (
    <Modal visible={modalVisibility}>
      <View style={styles.container}>
        <Image source={{uri:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2023_14/3601858/230406-dog-food-kb-2x1.jpg'}} style={styles.image}/>
        <Image source={require("../assets/image.jpeg")} style={styles.image} />
        <TextInput 
        style={styles.input}
        onChangeText={changeTextHandler}
        value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Confirm" onPress={confirmHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress ={cancelHandler} />  
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderColor: "orange",
    borderWidth: 2,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    marginHorizontal: 10,
    width: "30%",
  }
})