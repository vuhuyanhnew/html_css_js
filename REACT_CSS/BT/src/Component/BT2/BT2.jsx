import { useState } from "react";


export default function TH2() {
    const [button, setButton] = useState("");

    const handleDayClick = () => {
        setButton("day");
    }
    const handleNightClick = () =>{
        setButton("night");
    }
    return (
    <>
        <button onClick={handleNightClick}>Night</button>
        <button onClick={handleDayClick}>Day</button>
        <div>{button}</div>
    </>

    )
}