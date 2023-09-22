import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/input';

export default function App() {
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const name = "My Personal App";
  //update this callback function to receive the changed text and store it in text state
  
  function changeDataHandler(data) {
    console.log("callback function called", data);
    setText(data);
    makeModalInvisible();
  }
  function makeModalVisible() {
    setIsModalVisible(true);
  }

  function makeModalInvisible() {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on {name}!</Text>
      {/* render header component here and pass a props with the name variable as value */}
      <Header appName={name}/>
      <StatusBar style="auto" />
      <Input 
        changedHandler={changeDataHandler}
        modalVisibility={isModalVisible}
        hideModal={makeModalInvisible}
      />
      <Button 
        title="Add a goal" 
        onPress={() => makeModalVisible()} 
      />

      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  }
});
