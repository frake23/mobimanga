import React from 'react';
import { IntroController } from '../modules/intro/IntroController';
import MainNavigator from './MainNavigator';
import useIntroScreen from './useIntroScreen';

export default function IntroSwitch() {
    const {isIntro, exitIntro} = useIntroScreen();
    return isIntro ? <IntroController onExit={exitIntro}/> : <MainNavigator/>;
}
