import { db } from '../../firebase';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const addChat = (chat) => ({
  type: ADD_CHAT,
  chat,
});

export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT';
export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  chatId,
});

export const addChatWithFirebase = (chatId, newChat) => async (dispatch) => {
  db.ref("chats").child(chatId).set(newChat);
  dispatch(addChat(newChat));
};

export const removeChatWithFirebase = (chatId) => async (dispatch) => {
  db.ref("chats").child(chatId).remove();
  dispatch(removeChat(chatId));
};