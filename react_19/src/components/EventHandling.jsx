import React from 'react'
import "./EV.css"

const EventHandling = () => {

    // //Traditional function
    // function handleButtonClick() {
    //     alert("Hey I am on click event")
    // }

    //Modern function
    const handleButtonClick = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.type)
        alert("Hey I am on click event")

    }

    return (
        <>
            <button onClick={handleButtonClick}>Click Me</button> {/*Named Function*/}
            <button onClick={() => handleButtonClick()}>Click Me</button> {/*Anonymous or Fat arrow Function*/}
        </>
    )
}

export default EventHandling