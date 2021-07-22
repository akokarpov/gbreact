import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

  export const Form = (props) => {
    return (
 
      <form onSubmit={props.handleSubmit}>
      <TextField autoFocus="true" id="standard-basic" label="😁 Message" type="text" value={props.message} onChange={e => props.setMessage(e.target.value)} />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Send
      </Button>
    </form>
 
    );
  };