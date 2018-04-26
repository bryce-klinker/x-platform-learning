import React from 'react';
import { shallow } from 'enzyme';

import { flushPromisesAndUpdate } from '../../../testing';
import PlayerDetail from './PlayerDetail';
import PlayerDetailScreen from './PlayerDetailScreen';

it('should have player detail', async () => {
  const player = { firstName: 'idk' };
  fetch.mockResponse(JSON.stringify(player));

  const screen = shallow(<PlayerDetailScreen playerId={44} />);
  await flushPromisesAndUpdate(screen);

  expect(screen.find(PlayerDetail).props().player).toEqual(player);
  expect(fetch).toHaveBeenCalledWith('http://localhost:3000/players/44');
});
