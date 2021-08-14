import { db } from '../../firebase';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const addChat = () => ({
  type: ADD_CHAT,
});

export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT';
export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  chatId,
});

export const deleteChatWithFirebase = (chatId) => async () => {
  db.ref("messages").child(chatId).remove();
};
