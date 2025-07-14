import React from 'react';

const EventPropagation = () => {

    const handleOuterDivClick = () => {
        console.log('Outer DIV clicked');
    };

    const handleInnerDivClick = () => {
        console.log('Inner DIV clicked');
    };

    const handleButtonClick = (event) => {
        console.log('Button clicked');
        // top the event from bubbling up
        // event.stopPropagation();
    };

    return (
        <div
            onClick={handleOuterDivClick}
            style={{ padding: '40px', backgroundColor: '#d1e7dd' }}
        >
            <div
                onClick={handleInnerDivClick}
                style={{ padding: '30px', backgroundColor: '#f8d7da' }}
            >
                <button onClick={handleButtonClick}>Click Me</button>
            </div>
        </div>
    );
};

export default EventPropagation;
