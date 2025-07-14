import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

  return (
    <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
        </header>
        <section className='form'>
            <form>
                <div>
                    <input type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event)=> handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>
        </section>
    </section>
  )
}

export default Todo