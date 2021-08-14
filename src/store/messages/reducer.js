import { ADD_MESSAGE, REMOVE_DIALOG } from "./actions";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
          ...state,
          messageList: {
            ...state.messageList,
            [action.chatId]: action.message,
          },
      };
    }
    case REMOVE_DIALOG: {
      delete state.messageList[action.chatId];
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
