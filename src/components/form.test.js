import { render, screen, fireEvent } from '@testing-library/react';
import { initialState, messagesReducer } from '../store/messages/reducer.js';
import { addMessage, removeDialog } from '../store/messages/actions.js';
import { createStore } from 'redux';
import { renderHook, act } from '@testing-library/react-hooks'
import { Form } from './Form.js';

test('should not send empty value to reducer ?????????', () => {
  
  const { result } = renderHook(() => Form())

  const store = createStore();
  
  const component = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  act(() => {
    result.current.sendUserMessage()
  })

  expect(result.current.value).toBe('')
})