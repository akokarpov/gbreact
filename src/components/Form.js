import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import faker from 'faker';

export const Form = (props) => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const sendUserMessage = () => {
    if (value !== '' && props.chatId !== undefined) {
      let newMessage = {
        id: faker.datatype.uuid(),
        message: value,
        createAt: faker.date.past().toISOString(),
        author: {
          id: faker.datatype.uuid(),
          name: "me",
          avatar: faker.image.avatar(),
        }
      };
      props.addMessage(newMessage);
      setValue('');
    }
  }

  const checkKey = (event) => {
    if (event.code === "Enter") {
      sendUserMessage();
    };
  }

  return (

    <div>

      <TextField
        autoFocus={true}
        id="standard-basic"
        label="😁 Message"
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={checkKey} />

      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={sendUserMessage}
      >
        Send
      </Button>

    </div>

  );
};