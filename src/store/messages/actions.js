
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

