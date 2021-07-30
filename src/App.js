import React, { useEffect, useState } from 'react';
import { ChatsPage } from './pages/ChatsPage';
import faker from 'faker';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile';

export default function App() {

  const [messagesList, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (messagesList.length > 0) {
      let lastAuthor = messagesList[messagesList.length - 1].author['name'];
      if (lastAuthor === 'me') {
        let robotMessage = {
          id: faker.datatype.uuid(),
          message: "hello, human",
          createAt: faker.date.past().toISOString(),
          author: {
            id: faker.datatype.uuid(),
            name: "robot",
            avatar: faker.image.avatar(),
          }
        };
        setTimeout(() => {
          setMessages(messagesList.concat(robotMessage));
        }, 1500);
      }
    }
    return () => { };
  }, [messagesList]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== '') {
      let userMessage = {
        id: faker.datatype.uuid(),
        message: message,
        createAt: faker.date.past().toISOString(),
        author: {
          id: faker.datatype.uuid(),
          name: "me",
          avatar: faker.image.avatar(),
        }
      };
      setMessages(messagesList.concat(userMessage));
      setMessage('');
    };
  };

  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route path="/chats">
          <ChatsPage
            message={message}
            messagesList={messagesList}
            handleSubmit={handleSubmit}
            setMessage={setMessage} />
        </Route>

      </div>
    </BrowserRouter>

  );
}