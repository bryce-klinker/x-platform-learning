import React, { Component } from 'react';
import PlayersList from './list/PlayersList';
import PlayerDetailScreen from './detail/PlayerDetailScreen';

export default class PlayersScreen extends Component {
  state = { players: [] };

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/players');
    const players = await response.json();
    this.setState({ players });
  }

  render() {
    const { players } = this.state;
    return (
      <PlayersList
        players={players}
        onSelected={p => this.navigateToPlayer(p)}
      />
    );
  }

  navigateToPlayer(player) {
    const { navigator } = this.props;
    navigator.push({
      screen: PlayerDetailScreen.screenName,
      passProps: { playerId: player.id },
    });
  }
}
