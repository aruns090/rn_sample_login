/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-native-paper';
import App from './src';
import {theme} from './src/core/theme';

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;
