import React from 'react';
import { ActivityIndicator } from 'react-native';
import { shallow } from 'enzyme';

import { LoadingIndicator } from './LoadingIndicator';

it('should show activity', () => {
  const loading = shallow(<LoadingIndicator />);
  expect(loading.contains(<ActivityIndicator />)).toBe(true);
});
