import React from 'react';
import { Text } from 'react-native';
import { ListItem } from 'native-base';

const PlayerListItem = ({ player, onSelected }) => {
  const { firstName, lastName } = player;
  return (
    <ListItem button onPress={() => onSelected(player)}>
      <Text>
        {lastName}, {firstName}
      </Text>
    </ListItem>
  );
};

export default PlayerListItem;
