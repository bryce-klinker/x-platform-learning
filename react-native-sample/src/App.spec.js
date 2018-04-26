import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';

import App from './App';

it('should show app name', () => {
  const app = shallow(<App />);
  expect(
    app
      .find(Text)
      .first()
      .dive()
      .text(),
  ).toContain('footy');
});
