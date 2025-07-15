import React, { useState } from 'react'


//Parent Component
export const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    )
}

//Child 1 Component
const InputComponent = ({ setInputValue, inputValue }) => {
    return (
        <>
            <input type="text" placeholder='enter your name' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        </>
    )
}

//Child 2 Component
const DisplayComponent = ({ inputValue }) => {
    return <p>The current input value is: {inputValue}</p>
}
