import { useState } from 'react'
import BT1 from './Component/BT1/BT1.jsx'
import BT2 from './Component/BT2/BT2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BT1 />
     <br />
     <BT2 />
    </>
  )
}

export default App
