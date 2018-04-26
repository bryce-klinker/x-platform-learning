import React from 'react';
import { shallow } from 'enzyme';

import CompetitionsScreen from './CompetitionsScreen';
import { getAllText } from '../../testing';

it('shoud have competitions', () => {
  const text = getAllText(shallow(<CompetitionsScreen />));
  expect(text).toContain('Competitions');
});
