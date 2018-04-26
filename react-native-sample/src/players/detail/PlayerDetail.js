import React, { Component } from 'react';
import { Text } from 'react-native';
import { LoadingIndicator } from '../../common/components/LoadingIndicator';

const PlayerDetail = ({ player }) => {
  if (!player) {
    return <LoadingIndicator />;
  }

  return (
    <Text>
      {player.lastName}, {player.firstName}
    </Text>
  );
};

export default PlayerDetail;
