import React from 'react';
import { shallow } from 'enzyme';

import PlayerDetailScreen from './detail/PlayerDetailScreen';
import PlayersScreen from './PlayersScreen';
import {
  getAllText,
  flushPromisesAndUpdate,
  fakeNavigator,
} from '../../testing';
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

  const screen = shallow(<PlayersScreen navigator={fakeNavigator} />);
  await flushPromisesAndUpdate(screen);
  screen
    .find(PlayersList)
    .props()
    .onSelected({ id: 55 });
  expect(fakeNavigator.push).toHaveBeenCalledWith({
    screen: PlayerDetailScreen.screenName,
    passProps: { playerId: 55 },
  });
});
