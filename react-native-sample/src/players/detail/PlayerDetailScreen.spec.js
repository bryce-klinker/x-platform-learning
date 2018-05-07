import React from 'react';
import { shallow } from 'enzyme';
import Config from 'react-native-config';

import { flushPromisesAndUpdate, fakeNavigation } from '../../../testing';
import PlayerDetail from './PlayerDetail';
import PlayerDetailScreen from './PlayerDetailScreen';

it('should have player detail', async () => {
  const player = { firstName: 'idk' };
  fetch.mockResponse(JSON.stringify(player));
  fakeNavigation.state = {
    params: {
      playerId: 44,
    },
  };

  const screen = shallow(<PlayerDetailScreen navigation={fakeNavigation} />);
  await flushPromisesAndUpdate(screen);

  expect(screen.find(PlayerDetail).props().player).toEqual(player);
  expect(fetch).toHaveBeenCalledWith(`${Config.API_URL}/players/44`);
});
