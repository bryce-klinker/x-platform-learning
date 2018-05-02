import React from 'react';
import { Text } from 'react-native';
import { ListItem } from 'native-base';

const PlayerListItem = ({ player, onSelected }) => {
  const { firstName, lastName } = player;
  return (
    <ListItem testID="player-item" button onPress={() => onSelected(player)}>
      <Text>
        {lastName}, {firstName}
      </Text>
    </ListItem>
  );
};

export default PlayerListItem;
