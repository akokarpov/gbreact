import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import React from 'react';

describe('presentation component tests', () => {

  it('renders a placeholder when there are no messages in the chat', () => {

    const component = render(
      <BrowserRouter>
        <NavBar />
        </BrowserRouter>
    );
    expect(component).toMatchSnapshot;
  });

});