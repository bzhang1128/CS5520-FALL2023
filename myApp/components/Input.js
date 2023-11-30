import {
  Button,
  Modal,
  StyleSheet,
  Image,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import ImageManager from "./ImageManager";

// receive the modalIsvisible prop
const Input = ({ changedHandler, modalVisiblity, hideModal }) => {
  const [enteredText, setEnteredText] = useState("");
  const [takenImageUri, setTakenImageUri] = useState("");
  //update this callback function to receive the changed text and store it in text state variable
  function changeTextHandler(changedText) {
    console.log(changedText);
    setEnteredText(changedText);
  }

  function cancelHandler() {
    hideModal();
  }
  function confirmHandler() {
    // call a function that is passed to me from App.js and pass the enteredText via it
    changedHandler({ text: enteredText, uri: takenImageUri });
    //clear the textinput
    setEnteredText("");
  }
  function passImageUri(uri) {
    // store the uri in a state variable
    setTakenImageUri(uri);
  }

  return (
    // use the new peop to show the modal
    <Modal visible={modalVisiblity}>
      <View style={styles.container}>
        <Image
          source={{
            uri:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2023_14/3601858/230406-dog-food-kb-2x1.jpg',
          }}
          style={styles.image}
        />
        <Image source={require("../assets/image.jpeg")} style={styles.image} />

        <TextInput
          style={styles.input}
          onChangeText={changeTextHandler}
          value={enteredText}
        />
        <ImageManager passImageUri={passImageUri} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="red" title="Cancel" onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button
              disabled={!enteredText}
              title="Confirm"
              onPress={confirmHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "purple",
    borderBottomWidth: 2,
    width: 200,
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  buttonContainer: { flexDirection: "row", marginTop: 15 },
  button: {
    marginHorizontal: 10,
    width: "30%",
  },
});