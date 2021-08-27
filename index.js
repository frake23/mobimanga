/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Config from "react-native-config";

AppRegistry.registerComponent(appName, () =>
    Config.IS_STORYBOOK === 'true' ? App : App
);

console.log(Config)


