import React from 'react'
import { useState } from 'react';
import "./Challenge.css"

const Challenge = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        if (count + step <= 100 && count + step >= 0) {
            setCount(count + step)
        }
    }

    const handleDecrement = () => {
        if (count - step >= 0 && count - step <= 100) {
            setCount(count - step)
        }
    }

    const handleReset = () => {
        setCount(0);
    }

    const handleStep = (value) => {
        setStep(value)
    }

    return (
        <div>
            <h1>useState Challenge</h1>
            <p>Count:- {count}</p>
            <span>Step:- <input type="text" onChange={(event) => handleStep(Number(event.target.value))} /></span>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}                 

export default Challenge;