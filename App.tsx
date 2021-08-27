import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {IntroController} from './src/modules/intro/IntroController';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <IntroController />
    </GestureHandlerRootView>
  )
};

export default App;
