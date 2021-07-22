import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core';

export const ListMessage = (props) => {

  return (

    props.message.map((item) => (
      <ListItem key={item.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.author.avatar} src={item.author.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={item.author.name}
          secondary={
            <React.Fragment>
              <Typography
                component={'span'}
                variant="body2"
                color="textPrimary"
              >
                {item.message}
              </Typography>
              <Typography
                component={'span'}
                display="block"
                variant="body2"
                color="textPrimary">
                {item.createAt}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>))

  );
};