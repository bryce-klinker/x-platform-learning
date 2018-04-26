import React from 'react';
import { List } from 'native-base';

import PlayerListItem from './PlayerListItem';

const PlayersList = ({ players }) => {
  const items = players.map(p => <PlayerListItem key={p.id} player={p} />);
  return <List>{items}</List>;
};

export default PlayersList;
