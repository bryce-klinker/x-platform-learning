import React, { Component } from 'react';
import { List } from 'native-base';
import Config from 'react-native-config';

import PlayerListItem from './PlayerListItem';
import PlayerDetailScreen from '../detail/PlayerDetailScreen';

export default class PlayersList extends Component {
  static screenName = 'List';
  state = { players: [] };

  async componentDidMount() {
    const response = await fetch(`${Config.API_URL}/players`);
    const players = await response.json();
    this.setState({ players });
  }

  render() {
    const { players } = this.state;
    const items = players.map(p => (
      <PlayerListItem
        key={p.id}
        player={p}
        onSelected={p => this.onPlayerSelected(p)}
      />
    ));
    return <List testID="players">{items}</List>;
  }

  onPlayerSelected(player) {
    const { navigation } = this.props;
    navigation.navigate(PlayerDetailScreen.screenName, {
      playerId: player.id,
    });
  }
}
