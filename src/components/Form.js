import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import faker from 'faker';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addMessageWithFirebase, initMessageTracking } from '../store/messages/actions.js';
import { getUserName } from '../store/profile/selectors.js';

export const Form = () => {

  const { chatId } = useParams();
  const userName = useSelector(getUserName, shallowEqual);
  const [value, setInputFieldValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputFieldValue(event.target.value);
  }

  const sendUserMessage = () => {
    if (value !== '' && chatId !== undefined) {
      let newUserMessage = {
        userAvatar: faker.image.avatar(),
        userName: userName,
        userMessage: value,
        createAt: faker.date.past().toISOString().slice(11, 19),
      };
      dispatch(addMessageWithFirebase(chatId, newUserMessage));
      setInputFieldValue('');
    };
  }

const checkKey = (event) => {
  if (event.code === "Enter") {
    sendUserMessage();
  };
}

useEffect(() => {
  dispatch(initMessageTracking());
}, [dispatch]);

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