import React from 'react';
import { shallow } from 'enzyme';

import PlayerDetailScreen from './detail/PlayerDetailScreen';
import PlayersScreen from './PlayersScreen';
import { flushPromisesAndUpdate, fakeNavigation } from '../../testing';
import PlayersList from './list/PlayersList';

it('should have players', async () => {
  const players = [{}, {}];
  fetch.mockResponse(JSON.stringify(players));

  const screen = shallow(<PlayersScreen />);
  await flushPromisesAndUpdate(screen);

  expect(screen.find(PlayersList).props().players).toEqual(players);
});

it('should navigate to player', async () => {
  const players = [{}, {}];
  fetch.mockResponse(JSON.stringify(players));

  const screen = shallow(<PlayersScreen navigation={fakeNavigation} />);
  await flushPromisesAndUpdate(screen);
  screen
    .find(PlayersList)
    .props()
    .onSelected({ id: 55 });
  expect(fakeNavigation.navigate).toHaveBeenCalledWith(
    PlayerDetailScreen.screenName,
    {
      playerId: 55,
    },
  );
});
