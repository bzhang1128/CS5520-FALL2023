import { View, Text, Image, StyleSheet, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Button from '../components/Button';
import CustomTextInput from '../components/TextInput';

const GameScreen = ({ userData, onLogout }) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [isCorrectGuess, setIsCorrectGuess] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * (21 - 10) + 10);
    setRandomNumber(random);
  }, []);

  const handleConfirm = () => {
    const guess = parseInt(userGuess);
    //check if the guess input is a number and whether the number is a number between 10 - 20.
    if (isNaN(guess) || guess < 10 || guess > 20) {
      Alert.alert('Invalid number!', 'Number has to be a number between 10 and 20.');
      return;
    }

    if (guess === randomNumber) {
      setIsCorrectGuess(true);
      setGuessCount(guessCount + 1);
    } else {
      setGuessCount(guessCount + 1);
    }
  };

  const handleReset = () => {
    setUserGuess('');
  }

  const handleTryAgain = () => {
    setUserGuess('');
    setIsCorrectGuess(false);
  }

  const handleNewGame = () => {
    setRandomNumber(null);
    setUserGuess('');
    setGuessCount(0);
    setIsCorrectGuess(false);
    const random = Math.floor(Math.random() * (21 - 10) + 10);
    setRandomNumber(random);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoutButton}>
        <Button title="Logout" onPress={onLogout} />
      </View>
      <Text style={styles.title}>Guess A Number Between 10 - 20</Text>
      <Card>
        <Text style={styles.title}>Enter A Number</Text>
        {randomNumber !== null ? (
          <View alignItems='center'>
            <Text>Guess a number between 10 and 20:</Text>
            <CustomTextInput
              style={styles.input}
              placeholder="Your Guess"
              value={userGuess}
              onChangeText={(text) => setUserGuess(text)}
              keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Reset" onPress={handleReset} />
              </View>
              <View style={styles.button}>
                <Button title="Confirm" onPress={handleConfirm} />
              </View>
            </View>
            {guessCount > 0 && isCorrectGuess ? (
              <View alignItems='center'>
                <Text>Congratulations! You guessed correct!</Text>
                <Text>Number of guesses: {guessCount}</Text>
                <Image
                  source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }}
                  style={styles.image}
                />
                <Button title="New Game" onPress={handleNewGame} />
              </View>
            ) : ( 
              <View alignItems='center'>
                {guessCount > 0 && (
                  <Text>Wrong guess! Try again.</Text>
                )}
                {guessCount >0 && (
                  <Image source={require('../assets/sadface.png')} style={styles.image} />
                )}
                {guessCount > 0 && (
                  <Button title="Try Again" onPress={handleTryAgain} />
                )}
                
              </View>
            )}
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    margin: 10,
  },
  logoutButton: {
    position: 'absolute', 
    top: 100, 
    right: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    marginHorizontal: 10,
    width: "40%",
  },
});

export default GameScreen