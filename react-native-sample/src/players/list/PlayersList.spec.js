import React from 'react';
import { shallow } from 'enzyme';

import PlayersList from './PlayersList';
import PlayerListItem from './PlayerListItem';

it('should show players', () => {
  const players = [{ id: 12 }, { id: 54 }, { id: 7 }];
  const list = shallow(<PlayersList players={players} />);
  expect(list.find(PlayerListItem).length).toBe(3);
});

it('should select player', () => {
  const players = [{ id: 54 }];

  let player;
  const list = shallow(
    <PlayersList players={players} onSelected={p => (player = p)} />,
  );
  list
    .find(PlayerListItem)
    .props()
    .onSelected({ id: 54 });

  expect(player).toEqual({ id: 54 });
});
