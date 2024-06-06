import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    function submitHandler (event){
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }

    
  return (
    <div>
        <form action="" onSubmit={submitHandler}>
            <input 
                type="text" 
                onChange={(event)=>setTask(event.target.value)}
            />
            <br />
            <button>Add Task</button>
        </form>
    </div>
  )
}

export default AddTodo