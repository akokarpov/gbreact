import React from 'react';
import { List, Paper, Grid } from '@material-ui/core';
import { ListChat } from '../components/ListChat';
import { Dialog } from '../components/Dialog';
import { Form } from '../components/Form';
import { useDispatch } from 'react-redux';
import { addChatWithFirebase } from '../store/chats/actions.js';
import Button from '@material-ui/core/Button';
import { db } from '../firebase';
import faker from 'faker';

let chatId = 0;

const getChatIdFromFirebase = (snapshot) => {
  if (snapshot === null) return 0;
  const chats = [];
  snapshot.forEach((chat) => {
    chats.push(chat.val());
    console.log(chat.val())
  });
  return chats.length
}

db.ref("chats").once("value", (snapshot) => {
  chatId = getChatIdFromFirebase(snapshot);
});

export const Chats = () => {
  const dispatch = useDispatch();
  const onAddChat = () => {
    let newChat = {
      id: chatId,
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
    };
    dispatch(addChatWithFirebase(chatId, newChat));
    chatId += 1;
  };

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