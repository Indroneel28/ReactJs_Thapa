import React from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoListItem = ({data, checked, onHandleDeleteTodo, onHandleCheckTodo }) => {

    return (
        <li className='todo-item'>
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className='check-btn' onClick={() => onHandleCheckTodo(data)}>
                <MdCheck />
            </button>
            <button className='delete-btn' onClick={() => onHandleDeleteTodo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}

export default TodoListItem;