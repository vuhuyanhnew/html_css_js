import UserForm from './Component/UserForm.jsx';
import Greeting from './Component/Greeting.jsx';
import { useState } from 'react';
import './App.css';
import Header from './Component/Header.jsx';

function App() {
  const [userName, setUserName] = useState('');

  const handleNameSubmit = (name) => {
    setUserName(name);
  };

  return (
    <div>
      <h3>BT1</h3>
      <Header />

      <h3>BT2</h3>
      <UserForm onSubmitName={handleNameSubmit} />
      <Greeting name={userName} />
    </div>
  );
}

export default App;
