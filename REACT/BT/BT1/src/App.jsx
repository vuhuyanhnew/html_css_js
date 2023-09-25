import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const isUserLoggedIn = false;
  const mockArray = [1, 2, 3, 4, 5];
  const mockObject = {
    name: 'Huy Anh',
    age: 21,
    email: 'vuhuyanhnew@gmail.com',
  };

  if (isUserLoggedIn) {
    return (
      <div>
        <h1>Hello User</h1>
        <h2>Array Example:</h2>
        <ul>
          {Array.isArray(mockArray) && mockArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Object Example:</h2>
        <ul>
          {typeof mockObject == 'object' && Object.entries(mockObject).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Login now</h1>
        <h2>Array Example:</h2>
        <ul>
          {Array.isArray(mockArray) && mockArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Object Example:</h2>
        <ul>
          {typeof mockObject == 'object' && Object.entries(mockObject).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
