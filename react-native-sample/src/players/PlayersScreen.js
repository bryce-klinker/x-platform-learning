import React, { Component } from 'react';
import { Text } from 'react-native';
import PlayersList from './list/PlayersList';

export default class PlayersScreen extends Component {
  static screenName = 'Players';
  state = { players: [] };

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/players');
    const players = await response.json();
    this.setState({ players });
  }

  render() {
    const { players } = this.state;
    return <PlayersList players={players} />;
  }
}
