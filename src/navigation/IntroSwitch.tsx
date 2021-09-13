import React, { useEffect } from 'react';
import { IntroController } from '../modules/intro/IntroController';
import useIntroScreen from './useIntroScreen';

export const IntroSwitch: React.FC = () => {
    const {intro, exitIntro} = useIntroScreen();

    useEffect(() => console.log('exitintro updated'), [exitIntro]);

    return intro ? <IntroController onExit={exitIntro}/> : null;
}
