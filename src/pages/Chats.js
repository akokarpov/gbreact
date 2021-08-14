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

const getRandNum = () => Math.floor(Math.random() * 100000);
const idsArrayFromFirebase = [];
db.ref("chats").once("value", (snapshot) => {
  snapshot.forEach((chatId) => idsArrayFromFirebase.push(chatId.key));
});

export const Chats = () => {
  const dispatch = useDispatch();
  const onAddChat = () => {
    let newChatId = getRandNum();
    idsArrayFromFirebase.forEach((chatId) => {
      if (chatId.key === newChatId) newChatId = getRandNum();
    });
    let newChat = {
      id: newChatId,
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
    };
    dispatch(addChatWithFirebase(newChatId, newChat));
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