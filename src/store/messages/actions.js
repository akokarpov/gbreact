import { db } from "../../firebase";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

export const REMOVE_DIALOG = 'MESSAGES::REMOVE_DIALOG';
export const removeDialog = (chatId) => ({
  type: REMOVE_DIALOG,
  chatId,
});

export const addMessageWithFirebase = (chatId, newMessage) => async (dispatch) => {
  db.ref("messages").child(chatId).push(newMessage);
  dispatch(addMessage(chatId, newMessage));
};

export const removeDialogWithFirebase = (chatId) => async (dispatch) => {
  db.ref("messages").child(chatId).remove();
  dispatch(removeDialog(chatId));
};