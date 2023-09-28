import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { colors } from '../utilities/colors';

const Button = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: colors.disabledButton,
  },
  buttonText: {
    color: colors.buttonText, 
  },
});