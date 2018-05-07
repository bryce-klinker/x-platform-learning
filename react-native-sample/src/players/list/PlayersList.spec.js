import React from 'react';
import { shallow } from 'enzyme';
import Config from 'react-native-config';

import PlayersList from './PlayersList';
import PlayerListItem from './PlayerListItem';
import PlayerDetailScreen from '../detail/PlayerDetailScreen';
import { flushPromisesAndUpdate, fakeNavigation } from '../../../testing';

it('should show players', async () => {
  const players = [{ id: 12 }, { id: 54 }, { id: 7 }];
  fetch.mockResponse(JSON.stringify(players));

  const list = shallow(<PlayersList players={players} />);
  await flushPromisesAndUpdate(list);

  expect(list.find(PlayerListItem).length).toBe(3);
  expect(fetch).toHaveBeenCalledWith(`${Config.API_URL}/players`);
});

it('should select player', async () => {
  const players = [{ id: 54 }];
  fetch.mockResponse(JSON.stringify(players));

  const list = shallow(
    <PlayersList players={players} navigation={fakeNavigation} />,
  );
  await flushPromisesAndUpdate(list);

  list
    .find(PlayerListItem)
    .props()
    .onSelected({ id: 54 });

  expect(fakeNavigation.navigate).toHaveBeenCalledWith(
    PlayerDetailScreen.screenName,
    {
      playerId: 54,
    },
  );
});
