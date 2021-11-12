import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeDialogWithFirebase } from '../store/messages/actions.js';
import { getChatList } from '../store/chats/selectors.js';
import { removeChatWithFirebase } from '../store/chats/actions.js';

export const ListChat = () => {
  const chats = useSelector(getChatList, shallowEqual);
  const dispatch = useDispatch();

  const onDeleteChat = useCallback((event) => {
    const chatId = event.nativeEvent.path[3].id;
    dispatch(removeChatWithFirebase(chatId));
    dispatch(removeDialogWithFirebase(chatId));
  }, [dispatch]);

  return (
    chats.map((chat, index) =>
      <Link key={index} to={`/chats/${chat.id}`}>
        <ListItem className="navlink" key={index + 1}>
          <ListItemAvatar key={index + 2}>
            <Avatar key={index + 3} alt={chat.name} src={chat.avatar} />
          </ListItemAvatar>
          <ListItemText key={index + 4} primary={chat.name} />
          <IconButton key={index + 5} onClick={onDeleteChat} id={chat.id} type="button">
            <DeleteIcon key={index + 6} />
          </IconButton>
        </ListItem>
      </Link>
    )
  );
};