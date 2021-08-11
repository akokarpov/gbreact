import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeChat } from '../store/chats/actions.js';
import { removeDialog } from '../store/messages/actions.js';
import { getChatList } from '../store/chats/selectors.js';
import { deleteChatWithFirebase } from '../store/chats/actions.js';

export const ListChat = () => {
  const chats = useSelector(getChatList, shallowEqual);
  const dispatch = useDispatch();

  const onDeleteChat = useCallback((event) => {
    let chatId = event.nativeEvent.path[3].id;
    dispatch(deleteChatWithFirebase(chatId));
    dispatch(removeDialog(chatId));
    dispatch(removeChat(chatId));
  }, [dispatch]);

  return (
    chats.map((chat) =>
      <Link key={chat.id} to={`/chats/${chat.id}`}>
        <ListItem className="navlink" key={chat.id + 1}>
          <ListItemAvatar key={chat.id + 2}>
            <Avatar key={chat.id + 3} alt={chat.name} src={chat.avatar} />
          </ListItemAvatar>
          <ListItemText key={chat.id + 4} primary={chat.name} />
          <IconButton key={chat.id + 5} onClick={onDeleteChat} id={chat.id} type="button">
            <DeleteIcon key={chat.id + 6} />
          </IconButton>
        </ListItem>
      </Link>
    )
  );
};