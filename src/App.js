import { useState } from 'react';
import './App.css';
import MessageDisplay from './components/MessageDisplay';
import MessageInput from './components/MessageInput';
import UserSetupInput from './components/UserSetupInput';

function App() {
  const [user, setUser] = useState('');

  return (
    <div className="App">
      <h1>Live Chat</h1>
      <MessageDisplay />
      {user ? <MessageInput user={user} /> : <UserSetupInput setUser={setUser} />}
    </div>
  );
}

export default App;
