import React from 'react';
import { shallow } from 'enzyme';

import { getAllText } from '../../testing';
import ClubsScreen from './ClubsScreen';

it('should have clubs', () => {
  const text = getAllText(shallow(<ClubsScreen />));
  expect(text).toContain('Clubs');
});
