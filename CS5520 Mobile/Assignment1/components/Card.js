import { View, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'beige',
    borderRadius: 10,
    padding: 20,
    width: 250,
    height: 500,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default Card