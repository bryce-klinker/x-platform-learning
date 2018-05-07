import React from 'react';
import { Text } from 'react-native';
import { LoadingIndicator } from '../../common';

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
