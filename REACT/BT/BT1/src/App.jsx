import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const isUserLoggedIn = false;
  if (isUserLoggedIn) { return (<h1>Hello User</h1>) }
  else { return (<h1>Login now</h1>) }
}

export default App
