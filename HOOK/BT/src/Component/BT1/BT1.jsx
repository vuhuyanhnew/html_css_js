import { useState, useEffect } from "react";

export default function BT1() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);
    const [multiply, setMultiply] = useState(0);

    const handleNumberChange = (event) => {
        const inputName = event.target.name;
        const inputValue = parseFloat(event.target.value);

        if (inputName == "number1") {
            setNumber1(inputValue);
        } else if (inputName == "number2") {
            setNumber2(inputValue);
        }
    };
    useEffect(() => {
        setSum(number1 + number2);
        setMultiply(number1 * number2);
      }, [number1, number2]);
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            <input name="number1" type="number" value={number1} onChange={handleNumberChange}></input>
            <br />
            <input  name="number2" type="number" value={number2} onChange={handleNumberChange}></input>
            <div>Sum: {sum}</div>
            <div>Multiply: {multiply}</div>
        </div>
    )
}