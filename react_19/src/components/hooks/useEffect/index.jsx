import React, { useEffect, useState } from 'react'

const ReactUseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Count:-', count);
    }, [count])
    return (
        <div className='container effect-container'>
            <h1>Hello useEffect!</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export const ReactUseEffectDate = () => {
    const [date, setDate] = useState();
    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        },500)
    }, []);
    return (
        <div className='container effective-container'>
            <h1>Date: {date}</h1>
        </div>
    )
}

export default ReactUseEffect