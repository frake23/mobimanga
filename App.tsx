import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HomeScreen } from './src/modules/home/HomeScreen';

// import { IntroSwitch } from './src/navigation/IntroSwitch';

const App = () => {
  return (
    <NavigationContainer >
      <GestureHandlerRootView style={styles.wrapper}>
        <HomeScreen />
      </GestureHandlerRootView>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export default App;
