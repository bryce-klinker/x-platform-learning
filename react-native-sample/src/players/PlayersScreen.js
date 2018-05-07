import { createStackNavigator } from 'react-navigation';

import PlayersList from './list/PlayersList';
import PlayerDetailScreen from './detail/PlayerDetailScreen';

export default createStackNavigator({
  [PlayersList.screenName]: { screen: PlayersList },
  [PlayerDetailScreen.screenName]: { screen: PlayerDetailScreen },
});
