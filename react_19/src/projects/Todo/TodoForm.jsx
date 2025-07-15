import React from 'react';
import { useState } from 'react';

const TodoForm = ({ handleSubmission }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const handleFormSubmit = (event) => {
        //Prevent reload on clicking submit button (here add task is the submit button)
        event.preventDefault();
        handleSubmission(inputValue);
        //After adding task successfully, task input box should be empty now.
        setInputValue("");
    }
    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>
        </section>
    )
}

export default TodoForm;