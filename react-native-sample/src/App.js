import { Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import ClubsScreen from './clubs/ClubsScreen';
import CompetitionsScreen from './competitions/CompetitionsScreen';
import PlayersScreen from './players/PlayersScreen';

const screens = {
  Clubs: { screen: ClubsScreen },
  Competitions: { screen: CompetitionsScreen },
  Players: { screen: PlayersScreen },
};

function androidNavigator() {
  return createMaterialTopTabNavigator(screens);
}

function iosNavigator() {
  return createBottomTabNavigator(screens);
}

const navigator = Platform.OS === 'ios' ? iosNavigator() : androidNavigator();

export default navigator;
