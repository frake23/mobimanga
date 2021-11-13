import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MangaScreen } from './src/modules/manga/MangaScreen';

import IntroSwitch from './src/navigation/IntroSwitch';

const App = () => {
  return (
    <NavigationContainer >
      <GestureHandlerRootView style={styles.wrapper}>
        <MangaScreen />
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
