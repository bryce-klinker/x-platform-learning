import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';

import App from './App';
import { getAllText } from '../testing';

it('should show app name', () => {
  const app = shallow(<App />);
  const text = getAllText(app);
  expect(text).toContain('footy');
});
