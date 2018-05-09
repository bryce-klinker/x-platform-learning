import { createBottomTabNavigator } from 'react-navigation';

import ClubsScreen from './clubs/ClubsScreen';
import CompetitionsScreen from './competitions/CompetitionsScreen';
import PlayersScreen from './players/PlayersScreen';

const screens = {
  Clubs: { screen: ClubsScreen },
  Competitions: { screen: CompetitionsScreen },
  Players: { screen: PlayersScreen },
};

export default createBottomTabNavigator(screens);
