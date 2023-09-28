import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { colors } from '../utilities/colors';

const ErrorText = ({ error }) => {
  return (
    <Text style={styles.errorText}>{error}</Text>
  );
};

export default ErrorText

const styles = StyleSheet.create({
  errorText: {
    color: colors.errorText, 
    fontSize: 12,
    marginBottom: 5,
  },
});