import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const stopCounter = () => {
        if(useState !== 0){
            setIsRunning(false);
            setCount(0);
        }
        else if(useState === 0) {
            useEffect(true);
        }
            
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={stopCounter}>Stop Counter</button>
        </div>
    );
};

export default Counter;