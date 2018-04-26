import React from 'react';
import { shallow } from 'enzyme';
import { getAllText } from '../../../testing';

import PlayerDetail from './PlayerDetail';
import { LoadingIndicator } from '../../common/components/LoadingIndicator';

it('should show player name', () => {
  const player = { firstName: 'jack', lastName: 'bob' };

  const detail = shallow(<PlayerDetail player={player} />);

  expect(getAllText(detail)).toContain('bob, jack');
});

it('should show loading', () => {
  const detail = shallow(<PlayerDetail player={null} />);
  expect(detail.contains(<LoadingIndicator />)).toBe(true);
});
