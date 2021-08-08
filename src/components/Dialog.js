import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core';
import { useSelector, shallowEqual} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDialog } from '../store/messages/selectors.js';


export const Dialog = () => {

  const { chatId } = useParams();
  const messages = useSelector(getDialog, shallowEqual);
  const messagesArray = messages[chatId];

  if (chatId === undefined || messagesArray === undefined) {
    return <div>No Messages Yet!</div>
  } else {

    return (

      messagesArray.map((chat, index) => (
        <ListItem key={index} alignItems="flex-start">
          <ListItemAvatar key={index + 1}>
            <Avatar key={index + 2} alt={chat.userAvatar} src={chat.userAvatar} />
          </ListItemAvatar>
          <ListItemText
            key={index + 3}
            primary={chat.userName}
            secondary={
              <React.Fragment>
                <Typography
                  key={index + 4}
                  component={'span'}
                  variant="body2"
                  color="textPrimary"
                >
                  {chat.userMessage}
                </Typography>
                <Typography
                  key={index + 5}
                  component={'span'}
                  display="block"
                  variant="body2"
                  color="textPrimary">
                  {chat.createAt}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>))

    );
  };
}