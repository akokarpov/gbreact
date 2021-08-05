import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeChat } from '../store/chats/actions.js';
import { removeDialog } from '../store/messages/actions.js';
import { getChatList } from '../store/chats/selectors.js';

export const ListChat = () => {
  const chats = useSelector(getChatList, shallowEqual);
  const dispatch = useDispatch();

  const onDeleteChat = useCallback((event) => {
    let chatId = event.nativeEvent.path[3].id;
    dispatch(removeDialog(chatId));
    dispatch(removeChat(chatId));
  }, [dispatch]);

  return (
    chats.map((chat) =>
      <Link key={chat.id} to={`/chats/${chat.id}`}>
        <ListItem className="navlink" key={chat.id}>
          <ListItemAvatar>
            <Avatar alt={chat.name} src={chat.avatar} />
          </ListItemAvatar>
          <ListItemText primary={chat.name} />
          <IconButton onClick={onDeleteChat} id={chat.id} type="button">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </Link>
    )
  );
};