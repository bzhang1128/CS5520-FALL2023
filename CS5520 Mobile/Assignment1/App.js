import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StaringScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';
import { colors } from './utilities/colors';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('starting');
  const [userData, setUserData] = useState(null);

  // Handle Start button press from Starting Screen
  const handleStartPress = (data) => {
    setUserData(data);
    setCurrentScreen('confirm');
  };

  // Handle Continue button press from Confirm Screen
  const handleContinuePress = () => {
    setCurrentScreen('game');
  };

  // Handle Logout button press from Game Screen
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
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

