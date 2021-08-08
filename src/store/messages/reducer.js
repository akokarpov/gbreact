import { ADD_MESSAGE, REMOVE_DIALOG } from "./actions";

const initialState = {
  messageList: {
    
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentDialog = state.messageList[action.chatId] || [];
      return {
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentDialog,
            {
              userAvatar: action.message.userAvatar,
              userName: action.message.userName,
              userMessage: action.message.userMessage,
              createAt: action.message.createAt,
            },
          ],
        },
      };
    }
    case REMOVE_DIALOG: {
      delete state.messageList[action.chatId];
      return {
        ...state,
        messageList: {
          ...state.messageList,
        },
      };
    }
    default:
      return state;
  }
};
