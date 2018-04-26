import React from 'react';
import { shallow } from 'enzyme';
import { getAllText } from '../../../testing';

import PlayerDetail from './PlayerDetail';

it('should show player name', async () => {
  const player = { firstName: 'jack', lastName: 'bob' };

  const detail = shallow(<PlayerDetail player={player} />);

  expect(getAllText(detail)).toContain('bob, jack');
});
