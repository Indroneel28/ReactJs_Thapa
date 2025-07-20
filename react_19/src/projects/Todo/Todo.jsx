import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";
import TodoDate from "./TodoDate";
import {
  GetLocalStorageTodoData,
  SetLocalStorageTodoData,
} from "./TodoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => GetLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //If Empty input box, then not allowed to add anything.
    if (!content.trim()) return;

    //Duplicate tasks not allowed to be added.
    // if (task.includes(inputValue)) { //includes method check whether inputValue is present in task array or not.
    //     return;
    // }
    const existingTask = task.find((item) => item.content === content);
    if (existingTask) {
      return;
    }
    //Take the previous task array, copy it, and add a new task (inputValue) to the end,
    //then update the state with this new array.
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

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

  //After adding the task, update the local storage
  useEffect(() => {
    SetLocalStorageTodoData(task);
  }, [task]);

  const handleDeleteTask = (toBeDeleted) => {
    //slower
    // const index = task.indexOf(toBeDeleted);
    // //remove one element from index of task array
    // task.splice(index, 1);
    // setTask(task);

    //faster
    const updatedTask = task.filter((item) => item.content !== toBeDeleted);
    setTask(updatedTask);
  };

  const handleClearButton = () => {
    setTask([]);
  };

  const handleCheckTodo = (toBeChecked) => {
    const updatedTask = task.map((item) => {
      if (item.content === toBeChecked) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm handleSubmission={handleFormSubmit} />
      <section>
        <ul>
          {task.map((currentTask, index) => {
            return (
              <TodoListItem
                key={currentTask}
                data={currentTask.content}
                checked={currentTask.checked}
                onHandleDeleteTodo={handleDeleteTask}
                onHandleCheckTodo={handleCheckTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearButton}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
