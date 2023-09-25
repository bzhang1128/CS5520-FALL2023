import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StaringScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('starting');
  const [userData, setUserData] = useState(null);

  const handleStartPress = (data) => {
    setUserData(data);
    setCurrentScreen('confirm');
  };

  const handleContinuePress = () => {
    setCurrentScreen('game');
  };

  const handleLogoutPress = () => {
    setCurrentScreen('starting');
    setUserData(null); 
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'starting' && (
        <StaringScreen 
        onStart={handleStartPress}
       />
      )}
      {currentScreen === 'confirm' && (
        <ConfirmScreen 
          userData={userData}
          onContinue={handleContinuePress}
          onEdit={() => setCurrentScreen('starting')}
        />
      )}
      {currentScreen === 'game' && (
        <GameScreen
          userData={userData}
          onLogout={handleLogoutPress}
        />
      )}
      <StatusBar style="auto" />
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
});

