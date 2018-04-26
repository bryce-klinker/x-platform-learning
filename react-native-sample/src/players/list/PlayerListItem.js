import React from 'react';
import { Text } from 'react-native';
import { ListItem } from 'native-base';

const PlayerListItem = ({ player }) => {
  const { firstName, lastName } = player;
  return (
    <ListItem>
      <Text>
        {lastName}, {firstName}
      </Text>
    </ListItem>
  );
};

export default PlayerListItem;
