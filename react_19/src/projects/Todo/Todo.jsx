import React, { useEffect, useState } from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import TodoDate from './TodoDate';

const Todo = () => {

    const [task, setTask] = useState([])

    const handleFormSubmit = (inputValue) => {
        
        //If Empty input box, then not allowed to add anything.
        if (!inputValue)
            return;

        //Duplicate tasks not allowed to be added.
        if (task.includes(inputValue)) { //includes method check whether inputValue is present in task array or not.
            return;
        }
        //Take the previous task array, copy it, and add a new task (inputValue) to the end, 
        //then update the state with this new array.
        setTask((prevTask) => [...prevTask, inputValue]);
    }

    //todo Date and Time

    // formattedDate and formattedTime should be updated every second.
    // Therefore, we will use setInterval.
    // setInterval(() => {
    //     const now = new Date();
    //     const formattedDate = now.toLocaleDateString();
    //     const formattedTime = now.toLocaleTimeString();
    //     setDateTime(`${formattedDate} - ${formattedTime}`);
    // }, 1000)
    //But there is a problem of memory leak here.
    //So, we should avoid setInterval()

    //Therefore, we will use useEffect

    const handleDeleteTask = (toBeDeleted) => {
        //slower
        // const index = task.indexOf(toBeDeleted);
        // //remove one element from index of task array
        // task.splice(index, 1);
        // setTask(task);

        //faster
        setTask((prevTasks) =>
            prevTasks.filter((taskItem) => taskItem !== toBeDeleted)
        );
    }

    const handleClearButton = () => {
        setTask([]);
    }

    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <TodoDate/>
            </header>
            <TodoForm handleSubmission={handleFormSubmit}/>
            <section>
                <ul>
                    {
                        task.map((currentTask,index) => {
                            return(
                            <TodoListItem key={currentTask} data={currentTask} onHandleDeleteTodo={handleDeleteTask}/>
                            );
                        })
                    }
                </ul>
            </section>
            <section>
                <button className='clear-btn' onClick={handleClearButton}>
                    Clear All
                </button>
            </section>
        </section>
    )
}
export default Todo