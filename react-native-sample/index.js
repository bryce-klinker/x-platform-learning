import React, { Component } from 'react';
import { Navigation, Screen } from 'react-native-navigation';
import App, { SCREEN_NAME } from './src/App';

Navigation.registerComponent(SCREEN_NAME, () => App);

Navigation.startSingleScreenApp({
  screen: {
    screen: SCREEN_NAME,
    title: 'Footy',
  },
});
