import React from 'react';
import { shallow } from 'enzyme';

import PlayersList from './PlayersList';
import PlayerListItem from './PlayerListItem';

it('should show players', () => {
  const players = [{ id: 12 }, { id: 54 }, { id: 7 }];
  const list = shallow(<PlayersList players={players} />);
  expect(list.find(PlayerListItem).length).toBe(3);
});
