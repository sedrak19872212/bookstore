/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import App from './src';
import store from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications'




const RNRoot = () => {
  return (
    <Provider store={store}>
        <ToastProvider>
      <App />
        </ToastProvider>

    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRoot);
