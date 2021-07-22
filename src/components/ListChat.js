import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import faker from 'faker';

const listChat = Array.from({
    length: 10,
  }).map(() => ({
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
  }))

  export const ListChat = (props) => {
    return (
      
        listChat.map((item) => (<ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar alt={item.name} src={item.avatar} />
            </ListItemAvatar>
          <ListItemText primary={item.name} />
        </ListItem>))
      
    );
  };