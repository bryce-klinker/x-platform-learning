import React, { Component } from 'react';

import PlayerDetail from './PlayerDetail';

export default class PlayerDetailScreen extends Component {
  static screenName = 'Players.detail';
  state = { player: null };

  async componentDidMount() {
    const { playerId } = this.props;
    const response = await fetch(`http://localhost:3000/players/${playerId}`);
    const player = await response.json();
    this.setState({ player });
  }

  render() {
    const { player } = this.state;

    return <PlayerDetail player={player} />;
  }
}
