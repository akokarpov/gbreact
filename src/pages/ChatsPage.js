
import React from 'react';
import { List, Paper, Grid } from '@material-ui/core';
import { ListChat } from '../components/ListChat';
import { ListMessage } from '../components/ListMessage';
import { Form } from '../components/Form';

export const ChatsPage = (props) => {
  
    return (
        <div>
        <Grid container spacing={3}>
        <Grid item xs={3}>
          <ListChat />
        </Grid>
        <Grid item xs={7}>
          <Paper>
            <List>
              <ListMessage message={props.messagesList} />
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
        handleSubmit={props.handleSubmit}
        message={props.message}
        setMessage={props.setMessage}
        />
      </Grid>)
        </div>
    );
  };