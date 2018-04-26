import React from 'react';
import { shallow } from 'enzyme';

import PlayersScreen from './PlayersScreen';
import { getAllText, flushPromisesAndUpdate } from '../../testing';
import PlayersList from './list/PlayersList';

it('should have players', async () => {
  const players = [{}, {}];
  fetch.mockResponse(JSON.stringify(players));

  const screen = shallow(<PlayersScreen />);
  await flushPromisesAndUpdate(screen);

  expect(screen.find(PlayersList).props().players).toEqual(players);
});
