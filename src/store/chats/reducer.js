import { ADD_CHAT, REMOVE_CHAT} from "./actions.js";
import faker from 'faker';

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:

      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${state.chatList.length}`,
            avatar: faker.image.avatar(),
            name: faker.name.firstName(),
          },
        ],
      };
      case REMOVE_CHAT:
      return {
        chatList: [...state.chatList.filter(chat => chat.id !== action.chatId)]
      };
    default:
      return state;
  }
};
