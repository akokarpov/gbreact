import { db } from '../../firebase';
import faker from 'faker';

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

let chatCounter = 0;

export const addChatWithFirebase = () => async (dispatch) => {
  let newChat = {
    id: chatCounter,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
  };
  db.ref("chats").child(chatCounter).set(newChat);
  dispatch(addChat(newChat));
  chatCounter += 1;
};

export const removeChatWithFirebase = (chatId) => async (dispatch) => {
  db.ref("chats").child(chatId).remove();
  dispatch(removeChat(chatId));
};