import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles.css";
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Route exact path="/">
        <ul>
          <li><NavLink className="navlink" exact to="/">Main Page</NavLink></li>
          <li><NavLink className="navlink" exact to="/chats">My Chats</NavLink></li>
          <li><NavLink className="navlink" exact to="/profile">My Profile</NavLink></li>
        </ul>
      </Route>

      <Route exact path="/chats">
        <ul>
          <li><NavLink className="navlink" exact to="/">Main Page</NavLink></li>
          <li><NavLink className="navlink" exact to="/chats">My Chats</NavLink></li>
          <li><NavLink className="navlink" exact to="/profile">My Profile</NavLink></li>
        </ul>
        <App />
      </Route>

      <Route exact path="/profile">
        <ul>
          <li><NavLink className="navlink" exact to="/">Main Page</NavLink></li>
          <li><NavLink className="navlink" exact to="/chats">My Chats</NavLink></li>
          <li><NavLink className="navlink" exact to="/profile">My Profile</NavLink></li>
        </ul>
      </Route>

      <Switch>

      </Switch>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
