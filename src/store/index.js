
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';
import { ADD_MESSAGE, addMessageWithFirebase } from './messages';
import faker from 'faker';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { weatherReducer } from './weather';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root7',
  storage,
}

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  weather: weatherReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const botResponder = () => (dispatch) => (action) => {
  if (action.type === ADD_MESSAGE && action.message['userName'] !== undefined && action.message['userName'] !== `Bot`) {
    let botMessage = {
      userAvatar: faker.image.avatar(),
      userName: `Bot`,
      userMessage: `Hello, ${action.message['userName']}!`,
      createAt: faker.date.past().toISOString().slice(11, 19),
    };
    setTimeout(() => {
      dispatch(addMessageWithFirebase(action.chatId, botMessage));
    }, 1500);
  }
  dispatch(action);
}

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(botResponder, thunk))
);

export const persistor = persistStore(store);