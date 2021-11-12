import React from 'react';
import { IntroScreen } from '../modules/intro/IntroScreen';
import MainNavigator from './MainNavigator';
import useIntroScreen from './useIntroScreen';

export default function IntroSwitch() {
    const {isIntro, exitIntro} = useIntroScreen();
    return isIntro ? <IntroScreen onExit={exitIntro}/> : <MainNavigator/>;
}
