import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import faker from 'faker';
import { Link } from 'react-router-dom';

export const initialChats = Array.from({
  length: 10,
}).map((_, index) => ({
  id: `${index}`,
  avatar: faker.image.avatar(),
  name: faker.name.firstName(),
  dialog: [],
}))

export const ListChat = () => {
  return (

    initialChats.map((item, index) =>

        <Link key={item.id} to={`/chats/${index}`}>

          <ListItem className="navlink" key={item.id}>
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.avatar} />
            </ListItemAvatar>
            <ListItemText primary={item.name} />
          </ListItem>

        </Link>
    )

  );
};