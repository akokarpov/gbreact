
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer, addMessage, ADD_MESSAGE } from './messages';
import faker from 'faker';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const botResponder = () => (dispatch) => (action) => {

  if (action.type === ADD_MESSAGE && action.userName !== `Bot`) {
    let botMessage = {
      userAvatar: faker.image.avatar(),
      userName: `Bot`,
      userMessage: `Hello, ${action.message.userName}!`,
      createAt: faker.date.past().toISOString().slice(11, 19),
    };
    setTimeout(() => dispatch(addMessage(action.chatId, botMessage)), 1500);
  }
  dispatch(action);
}

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(botResponder, thunk))
  );
  
  export const persistor = persistStore(store);