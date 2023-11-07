import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../utilities/colors';

const CustomTextInput = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CustomTextInput

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: colors.textInputBorderColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderBottomColor: colors.textInputBorderBottomColor,
  },
});