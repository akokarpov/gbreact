
import { Message } from './Message';
import "./styles.css";

export default function App() {
  const message = "test message sent from App"
  return (
    <div className="App">
      <Message message={message}/>
    </div>
  );
}