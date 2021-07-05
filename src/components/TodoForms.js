
import React,{useState} from 'react';
import "./TodoForm.css";

const TodoForms = ({createTodo}) => {
    const [task, setTask] = useState("")
     const handleSubmit = (e) =>{
         e.preventDefault();
         createTodo(task)
         setTask("")
     }
    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input type="text" id="task" name="task" placeholder="Enter Task" className="" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}

export default TodoForms
