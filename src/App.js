import React, { useEffect, useState } from 'react';
import { List, Paper, Grid } from '@material-ui/core';
import { ListChat } from './components/ListChat';
import { ListMessage } from './components/ListMessage';
import { Form } from './components/Form';
import faker from 'faker';

export default function App() {

  const [messagesList, setMessages] = useState([]);
  const [message, setMessage] = useState("");

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
          setMessages(messagesList.concat(robotMessage));
        }, 1500);
      }
    }
    return () => { };
  }, [messagesList]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== '') {
      let userMessage = {
        id: faker.datatype.uuid(),
        message: message,
        createAt: faker.date.past().toISOString(),
        author: {
          id: faker.datatype.uuid(),
          name: "me",
          avatar: faker.image.avatar(),
        }
      };
      setMessages(messagesList.concat(userMessage));
      setMessage('');
    };
  };

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ListChat />
        </Grid>
        <Grid item xs={7}>
          <Paper>
            <List>
              <ListMessage message={messagesList} />
            </List>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center">
        <Form handleSubmit={handleSubmit} message={message} setMessage={setMessage} />
      </Grid>
    </div>
  );
}