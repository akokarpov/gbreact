import { render, screen, fireEvent } from '@testing-library/react';
import { initialState, messagesReducer } from '../store/messages/reducer.js';
import { addMessage, removeDialog } from '../store/messages/actions.js';
import { createStore } from 'redux';

describe('test Form component to send message', () => {

  it('send message to store', () => {

    const store = createStore();
    const component = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    // fireEvent.submit(component);
    // const actions = store.getActions();
    // const lastAction = actions[actions.length - 1];

    expect(store.getState()).toEqual("add state here...");
  });

});