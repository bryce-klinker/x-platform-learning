import React, { Component } from 'react';
import { Text } from 'react-native';

const PlayerDetail = ({ player }) => (
  <Text>
    {player.lastName}, {player.firstName}
  </Text>
);

export default PlayerDetail;
