import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timer, setTimer] = useState(60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
        setTimer(60);
    };

    return (
        <div>
            <h1>Countdown Timer</h1>
            <p>{timer} seconds</p>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
};

export default CountdownTimer;
