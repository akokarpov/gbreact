import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import faker from 'faker';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { ListMessage } from './ListMessage';
import { ChatItemPage } from '../pages/ChatItemPage';

const listChat = Array.from({
  length: 10,
}).map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
  name: faker.name.firstName(),
}))

export const ListChat = () => {
  return (

    listChat.map((item, index) =>

        <Link to={`/chats/chat_${index}`}>

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