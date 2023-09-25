
import './App.css'
import { HelloWorld } from './Component/HelloWorld'
import Header from './Component/Header';
import Footer from './Component/Footer';
import { useState } from 'react';
const DemoComponent = (props) => {
  return (
    <div>Đây là tuổi: {props.age}</div>
  )
}
function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Huy")
  const handleIncreaseAge = () => {
    setAge(age + 1);
  }
  return (
    <>
      <h3>TH1</h3>
      <HelloWorld />
      <h3>TH2</h3>
      <Header />
      <Footer />
      <h3>TH3</h3>
      <button onClick={handleIncreaseAge}>Tăng 1 tuổi</button>
      <DemoComponent age={age} displayName={name} />
    </>
  );
}

export default App
