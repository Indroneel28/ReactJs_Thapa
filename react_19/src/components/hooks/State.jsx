import React, { useState } from 'react'

const State = () => {
    //State should always be declared inside the component
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(()=>count+1)
        console.log(count)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Click Me</button>
        </>
    )
}

export default State