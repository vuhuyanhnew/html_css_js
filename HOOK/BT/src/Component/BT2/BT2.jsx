import { useState, useEffect } from "react";

export default function BT2() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const timeInterval = setInterval(() => {
          const currentTime = new Date().toLocaleTimeString();
          setTime(currentTime);
        }, 5000);
    
        return () => clearInterval(timeInterval);
      }, []);

    return (
        <div>
            <h4>Thời gian hiện tại sau 5 giây:</h4>
            <p>{time}</p>
        </div>
    );
}