import React from 'react';
import { IntroController } from '../modules/intro/IntroController';
import useIntroScreen from './useIntroScreen';

export const IntroSwitch: React.FC = () => {
    const {intro, exitIntro} = useIntroScreen();
    return intro ? <IntroController onExit={exitIntro}/> : null;
}
