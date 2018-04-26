import React from 'react';
import { List } from 'native-base';

import PlayerListItem from './PlayerListItem';

const PlayersList = ({ players, onSelected }) => {
  const items = players.map(p => (
    <PlayerListItem key={p.id} player={p} onSelected={onSelected} />
  ));
  return <List>{items}</List>;
};

export default PlayersList;
