import { Navigation } from 'react-native-navigation';

import ClubsScreen from './clubs/ClubsScreen';
import CompetitionsScreen from './competitions/CompetitionsScreen';
import PlayersScreen from './players/PlayersScreen';
import PlayerDetailScreen from './players/detail/PlayerDetailScreen';

export default function registerScreens() {
  Navigation.registerComponent(ClubsScreen.screenName, () => ClubsScreen);
  Navigation.registerComponent(
    CompetitionsScreen.screenName,
    () => CompetitionsScreen,
  );
  Navigation.registerComponent(PlayersScreen.screenName, () => PlayersScreen);
  Navigation.registerComponent(
    PlayerDetailScreen.screenName,
    () => PlayerDetailScreen,
  );
}
