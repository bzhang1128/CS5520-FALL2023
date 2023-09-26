import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import Card from '../components/Card';
import CustomTextInput from '../components/TextInput';
import Button from '../components/Button';
import ErrorText from '../components/ErrorText';
import { isNameValid, isEmailValid, isPhoneValid } from '../utilities/validation';

const StartingScreen = ({ onStart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleStartPress = () => {
    const inputErrors = {};

    if (!isNameValid(name)) {
      inputErrors.name = 'Please enter a valid name.';
    }

    if (!isEmailValid(email)) {
      inputErrors.email = 'Please enter a valid email.';
    }

    if (!isPhoneValid(phone)) {
      inputErrors.phone = 'Please enter a valid phone number.';
    }

    if (Object.keys(inputErrors).length > 0) {
      setErrors(inputErrors);
      return;
    }

    onStart({ name, email, phone });
  };

  const handleResetPress = () => {
    setName('');
    setEmail('');
    setPhone('');
    setIsChecked(false);
    setErrors({});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Card>
        <Text style={styles.label}>Name</Text>
        <CustomTextInput 
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {errors.name && <ErrorText error={errors.name} />}
        <Text style={styles.label}>Email address</Text>
        <CustomTextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {errors.email && <ErrorText error={errors.email} />}
        <Text style={styles.label}>Phone number</Text>
        <CustomTextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        {errors.phone && <ErrorText error={errors.phone} />}
        <View style={styles.checkboxContainer}>
          <Checkbox 
            value={isChecked}
            onValueChange={(value) => setIsChecked(value)}
          />
          <Text style={styles.checkboxLabel}>I am not a robot</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Reset" 
              onPress={handleResetPress}
              />
          </View>
          <View style={styles.button}>
            <Button 
              title="Start" 
              onPress={handleStartPress}
              disabled={!isChecked}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute', 
    top: 100, 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  label: {
    color: 'blue',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    marginHorizontal: 10,
    width: "30%",
  },
});

export default StartingScreen