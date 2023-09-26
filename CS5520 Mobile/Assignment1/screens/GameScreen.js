import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Button from '../components/Button';
import CustomTextInput from '../components/TextInput';

const GameScreen = ({ onLogout }) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [isGuessVisible, setIsGuessVisible] = useState(true);

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
    setIsGuessVisible(false);
  };

  const handleReset = () => {
    setUserGuess('');
  }

  const handleTryAgain = () => {
    setUserGuess('');
    setIsCorrectGuess(false);
    setIsGuessVisible(true);
  }

  const handleNewGame = () => {
    setRandomNumber(null);
    setUserGuess('');
    setGuessCount(0);
    setIsCorrectGuess(false);
    const random = Math.floor(Math.random() * (21 - 10) + 10);
    setRandomNumber(random);
    setIsGuessVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoutButton}>
        <Button title="Logout" onPress={onLogout} />
      </View>
      <Text style={styles.title}>Guess A Number Between 10 & 20</Text>
      <Card>
        {isGuessVisible ? (
          <View alignItems='center'>
            <Text style={styles.label}>Enter a Number</Text>
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
          </View>
        ) : (
          <View>
            {isCorrectGuess ? (
              <View alignItems='center'>
                <Text style={styles.text}>You guessed correct!</Text>
                <Text style={styles.text}>Number of guesses: {guessCount}</Text>
                <Image
                  source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }}
                  style={styles.image}
                />
                <Button title="New Game" onPress={handleNewGame} />
              </View>
            ) : (
              <View alignItems='center'>
                <Text style={styles.text}>You did not guess correct!</Text>
                <Image source={require('../assets/sadface.png')} style={styles.image} />
                <Button title="Try Again" onPress={handleTryAgain} />
              </View>
            )}
          </View>
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
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    top: 250,
  },
  label: {
    color: 'blue',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
  },
  text: {
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
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
    top: 150, 
    right: 0,
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