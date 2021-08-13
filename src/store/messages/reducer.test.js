
import { initialState, messagesReducer } from './reducer';
import { addMessage, removeDialog } from './actions';

let chatId = 'id0';

let newUserMessage = {
  userAvatar: 'avatar.jpg',
  userName: 'userName',
  userMessage: 'value',
  createAt: 'date',
};

let actionAdd = {
  type: `MESSAGES::ADD_MESSAGE`,
  chatId: chatId,
  message: newUserMessage,
}

let actionRemove = {
  type: `MESSAGES::REMOVE_DIALOG`,
  chatId: chatId,
}

describe('test for messagesReducer', () => {

  it('calling reducer without action returns initialState', () => {
    const result = messagesReducer();
    expect(result).toEqual(initialState);
  });

  it('message is added to end of array', () => {
    const result = messagesReducer(addMessage(chatId, newUserMessage));
    expect(result).toEqual(actionAdd);
  });

  it('dialog is removed', () => {
    const result = messagesReducer(removeDialog(chatId));
    expect(result).toEqual(actionRemove);
  });

});