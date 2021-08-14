import React, { useEffect, useState } from 'react';
import Home from './pages/Home.js';
import Profile from './pages/Profile';
import { Chats } from './pages/Chats';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Weather } from './pages/Weather';
import firebase from "firebase";
import PublicRoute from './hocs/PublicRoute.js';
import PrivateRoute from './hocs/PrivateRoute.js';

export default function App() {

  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <PublicRoute exact path="/">
          <Home />
        </PublicRoute>

        <PublicRoute authenticated={authed} exact path="/signup">
          <SignUp />
        </PublicRoute>

        <PublicRoute authenticated={authed} exact path="/login">
          <Login />
        </PublicRoute>

        <PrivateRoute authenticated={authed} exact path="/profile">
          <Profile />
        </PrivateRoute>

        <PrivateRoute authenticated={authed} exact path="/chats">
          <Chats />
        </PrivateRoute>

        <PrivateRoute authenticated={authed} path="/chats/:chatId">
          <Chats />
        </PrivateRoute>

        <PrivateRoute authenticated={authed} exact path="/weather">
          <Weather />
        </PrivateRoute>

        <PublicRoute>
          <h3>404 page</h3>
        </PublicRoute>

      </Switch>
    </BrowserRouter>

  );
}