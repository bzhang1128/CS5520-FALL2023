import { StyleSheet, Text} from 'react-native'
import React from 'react'

const ErrorText = ({ error }) => {
  return (
    <Text style={styles.errorText}>{error}</Text>
  );
};

export default ErrorText

const styles = StyleSheet.create({
  errorText: {
    color: 'red', 
    fontSize: 12,
    marginBottom: 5,
  },
});