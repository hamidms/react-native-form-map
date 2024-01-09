/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
// import CoreComponent from './src/CoreComponent';
// import DesainTampilan from './src/DesainTampilan';
// import StateProp from './src/StateProp';
// import ContohForm from './src/ContohForm';
// import TabNavigator from './src/navigation/TabNavigator';
import MainContainer from './src/MainContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainContainer);
