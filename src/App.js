import React from 'react';
import Home from './pages/Home.js';
import Profile from './pages/Profile';
import { Chats } from './pages/Chats';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Weather } from './pages/Weather.js';


export default function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/chats">
          <Chats />
        </Route>

        <Route path="/chats/:chatId">
          <Chats />
        </Route>

        <Route exact path="/weather">
          <Weather />
        </Route>

        <Route>
          <h3>404 page</h3>
        </Route>

      </Switch>
    </BrowserRouter>

  );
}