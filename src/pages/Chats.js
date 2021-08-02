
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Paper, Grid } from '@material-ui/core';
import { initialChats, ListChat } from '../components/ListChat';
import { Dialog } from '../components/Dialog';
import { Form } from '../components/Form';
import faker from 'faker';

const chatsArray = initialChats;

export const Chats = () => {

  const [messagesList, setMessagesList] = useState([]);
  const { chatId } = useParams();
  const [chats, setChats] = useState([...chatsArray]);

  useEffect(() => {
    if (messagesList.length > 0) {
      let lastAuthor = messagesList[messagesList.length - 1].author['name'];
      if (lastAuthor === 'me') {
        let robotMessage = {
          id: faker.datatype.uuid(),
          message: "hello, human",
          createAt: faker.date.past().toISOString(),
          author: {
            id: faker.datatype.uuid(),
            name: "robot",
            avatar: faker.image.avatar(),
          }
        };
        setTimeout(() => {
          addMessage(robotMessage);
        }, 1500);
      }
    }
    return () => { };
  }, [messagesList]);

  const addMessage = (newMessage) => {
    setChats(chatsArray[chatId].dialog.push(newMessage));
    setMessagesList(prevMessageList => prevMessageList.concat(newMessage));
    console.log(chats);
  }

  const returnChatDialog = (chatId) => {
    if (!chatId) {
      return []
    } else {
      return chatsArray[chatId].dialog;
    }
  };

  return (

    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>

          <ListChat />

        </Grid>
        <Grid item xs={7}>
          <Paper>
            <List>

              <Dialog
                dialog={returnChatDialog(chatId)}
              />

            </List>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center">

        <Form
          addMessage={addMessage}
          chatId={chatId}
        />

      </Grid>
    </div>

  );
};