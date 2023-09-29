import { useState } from "react"
import styles from "./TH2.module.css"
export default function TH2() {
    const [count, setCount] = useState(0);
const handleButtonClick = () =>{
setCount(count+1)
}

    return (
    <div>
        <button onClick={handleButtonClick}>Click</button>
        <div className={count % 2 == 0 ? styles.blueText : styles.redText} >Count: {count}</div>
    </div>
    )
}