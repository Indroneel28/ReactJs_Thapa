import React from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoListItem = ({data, onHandleDeleteTodo }) => {

    return (
        <li className='todo-item'>
            <span>{data}</span>
            <button className='check-btn'>
                <MdCheck />
            </button>
            <button className='delete-btn' onClick={() => onHandleDeleteTodo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}

export default TodoListItem;