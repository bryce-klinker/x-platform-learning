import React from 'react';
import { ListItem } from 'native-base';
import { shallow } from 'enzyme';

import { getAllText } from '../../../testing';
import PlayerListItem from './PlayerListItem';

it('should have player name', () => {
  const player = { firstName: 'something', lastName: 'bob' };
  const text = getAllText(shallow(<PlayerListItem player={player} />));
  expect(text).toContain('bob, something');
});

it('should trigger select player', () => {
  let player;
  const item = shallow(
    <PlayerListItem player={{ id: 65 }} onSelected={p => (player = p)} />,
  );

  item
    .find(ListItem)
    .props()
    .onPress();
  expect(player).toEqual({ id: 65 });
});
