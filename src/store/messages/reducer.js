import { ADD_MESSAGE, REMOVE_DIALOG } from "./actions";

export const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_MESSAGE: {
      let currentDialog = state.messageList[action.chatId] || [];
      currentDialog.push(action.message);
      return {
        ...state.messageList,
          messageList: {
            ...state,
            [action.chatId]: currentDialog,
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
