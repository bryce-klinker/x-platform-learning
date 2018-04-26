import React from 'react';
import { shallow } from 'enzyme';

import { getAllText } from '../../../testing';
import PlayerListItem from './PlayerListItem';

it('should have player name', () => {
  const player = { firstName: 'something', lastName: 'bob' };
  const text = getAllText(shallow(<PlayerListItem player={player} />));
  expect(text).toContain('bob, something');
});

it('should trigger select player', () => {});
