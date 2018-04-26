import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import ClubsScreen from './src/clubs/ClubsScreen';
import CompetitionsScreen from './src/competitions/CompetitionsScreen';
import PlayersScreen from './src/players/PlayersScreen';
import registerScreens from './src/screens';

registerScreens();
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Competitions',
      screen: CompetitionsScreen.screenName,
      title: 'Competitions',
    },
    {
      label: 'Clubs',
      screen: ClubsScreen.screenName,
      title: 'Clubs',
    },
    {
      label: 'Players',
      screen: PlayersScreen.screenName,
      title: 'Players',
    },
  ],
});
