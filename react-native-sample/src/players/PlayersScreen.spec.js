import React from 'react';
import { shallow } from 'enzyme';

import PlayersScreen from './PlayersScreen';
import { getAllText } from '../../testing';

it('should have players', () => {
  const text = getAllText(shallow(<PlayersScreen />));
  expect(text).toContain('Players');
});
