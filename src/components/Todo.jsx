import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';


function Todo() {
const todos = useSelector((state)=>state.todos);
console.log(todos)

const dispatch = useDispatch();

function deleteHandler (id){
    console.log(todos);
    dispatch(deleteTodo(id));
}

  return (
    <div>
        <h1>Todos</h1>
        {
            todos.map((todo)=><li key={todo.id}>{todo.task}
            <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
            </li>)
        }
    </div>
  )
}

export default Todo