import { useEffect, useState } from 'react';
import { Message } from './components/Message';

export default function App() {

  // 1. Добавить в компонент App поле стейта messageList. В нем хранить массив объектов - сообщений (объект должен содержать, как минимум, поля text и author). Начальное значение - пустой массив).
  const [messagesList, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [msgId, setMsgId] = useState(0);

  // 4. Добавить в App useEffect - на каждое отправленное пользователем сообщение должен отвечать робот (должно автоматически отправляться сообщение с фиксированным текстом) - для этого необходимо проверять автора последнего сообщения.
  // 5. * Сделать задержку ответа робота - сообщение от него должно отправляться через некоторый промежуток времени после отправки сообщения пользователя (напр., 1.5 сек).

  useEffect(() => {
    console.log("did mount");
    if (messagesList.length > 0) {
      let lastAuthor = messagesList[messagesList.length - 1].author;
      if (lastAuthor === 'me') {
        let robotMsg = { author: 'robot', text: "hello human", id: `${msgId}`, };
        setTimeout(() => {
          setMessages(messagesList.concat(robotMsg));
        }, 1500);
        setMsgId(msgId + 1);
      }
    }
    return () => {
      console.log(`unmount`);
    };
  }, [messagesList, msgId]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== '') {
      let userMsg = { author: 'me', text: message, id: `${msgId}`, };
      setMessages(messagesList.concat(userMsg));
      setMsgId(msgId + 1);
      setMessage('');
    };
  };

  // 2. Рендерить список сообщений через map.
  // 3. Добавить и стилизовать форму - поле для ввода текста и кнопка для отправки сообщения. При отправке сообщения обновление UI должно происходить за счет обновления стейта App.

  return (
    <div className="App">
      <h4>Chat with your own bot!</h4>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" value={message} onChange={e => setMessage(e.target.value)}></input>
        <input className="input" type="submit" value="send" />
      </form>
      <Message message={messagesList.map((el) => <div key={el.id}>{el.author + ": " + el.text}</div>)} />
    </div>
  );
}