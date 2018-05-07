import React, { Component } from 'react';
import Config from 'react-native-config';

import PlayerDetail from './PlayerDetail';

export default class PlayerDetailScreen extends Component {
  static screenName = 'Players.detail';
  state = { player: null };

  async componentDidMount() {
    const { playerId } = this.props.navigation.state.params;
    const response = await fetch(`${Config.API_URL}/players/${playerId}`);
    const player = await response.json();
    this.setState({ player });
  }

  render() {
    const { player } = this.state;

    return <PlayerDetail player={player} />;
  }
}
