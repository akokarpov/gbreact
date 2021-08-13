import { ADD_CHAT, REMOVE_CHAT } from "./actions.js";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        chatList: [
          ...state.chatList,
          action.chat,
        ],
      };
    case REMOVE_CHAT:
      return {
        chatList: [
          ...state.chatList.filter(chat => chat.id !== Number(action.chatId)),
        ],
      };
    default:
      return state;
  }

};
