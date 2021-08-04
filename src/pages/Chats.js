import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Paper, Grid } from '@material-ui/core';
import { ListChat } from '../components/ListChat';
import { Dialog } from '../components/Dialog';
import { Form } from '../components/Form';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getUserName } from '../store/profile/selectors.js';
import { getDialog } from '../store/messages/selectors.js';
import { addMessage } from '../store/messages/actions.js';
import { addChat } from '../store/chats/actions.js';
import Button from '@material-ui/core/Button';
import faker from 'faker';

export const Chats = () => {

  const { chatId } = useParams();
  const dispatch = useDispatch();
  const userName = useSelector(getUserName, shallowEqual);
  const messages = useSelector(getDialog, shallowEqual);
  const onAddChat = () => dispatch(addChat());

  useEffect(() => {
    if (messages[chatId] !== {} && messages[chatId] !== undefined) {
      if (messages[chatId][messages[chatId].length - 1].userName === userName) {
        let newBotMessage = {
          userAvatar: faker.image.avatar(),
          userName: `Bot`,
          userMessage: `Hello, ${userName}!`,
          createAt: faker.date.past().toISOString().slice(11, 19),
        };
        setTimeout(() => {
          dispatch(addMessage(chatId, newBotMessage));
        }, 1500);
      }
    }
    console.log(messages);
    return () => { };
  });

  return (

    <div>
      <Grid container spacing={3}>

        <Grid item xs={3}>

          <div className="addNewChatBox">
            <Button
              onClick={onAddChat}
              variant="outlined"
              color="secondary">
              💡 NEW CHAT
            </Button>
          </div>

          <ListChat />

        </Grid>
        <Grid item xs={7}>
          <Paper>
            <List>

              <Dialog />

            </List>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center">

        <Form />

      </Grid>
    </div>
  );
};