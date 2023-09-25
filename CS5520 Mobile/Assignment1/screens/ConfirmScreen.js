import { View, Text, StyleSheet, Modal } from 'react-native'
import React from 'react'
import Card from '../components/Card';
import Button from '../components/Button';

const ConfirmScreen = ({ userData, onEdit, onContinue }) => {
  return (
    <Modal>
      <View style={styles.container}>
        <Card>
          <Text>Hello {userData.name}!</Text>
          <Text>Please confirm the following information is correct by pressing the continue button</Text>
          <Text style={styles.userdata}>Email: {userData.email}</Text>
          <Text style={styles.userdata}>Email: {userData.phone}</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Go back" onPress={onEdit} />
            </View>
            <View style={styles.button}>
              <Button title="Continue" onPress={onContinue} />
            </View>
          </View>
        </Card>
      </View>
    </Modal>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userdata: {
    color: 'brown',
    marginTop: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    marginHorizontal: 5,
    width: "40%",
  },
});

export default ConfirmScreen