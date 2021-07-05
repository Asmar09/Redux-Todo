import React, {useState} from 'react';
import "./Todo.css";
import {TransitionGroup , CSSTransition} from 'react-transition-group';

const Todo = ({toggleTodo, task, complete, id , removeTodo, editTodo }) => {
      const [isEdit, setIsEdit] = useState(false)
      const [editTask, setEditTask] = useState(task)
      const handleEdit = (e) =>{
                   e.preventDefault()
                   editTodo(id, editTask);
                   setIsEdit(false) 
      }
    return (
      <TransitionGroup className={complete ? "Todo completed" : "Todo"}>
          {isEdit ? (
<CSSTransition key="editing" timeout={500} classNames="form">
<form className="Todo-edit-form" onSubmit={handleEdit}>
            <input type="text" name="task" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
            <button>
                Save
            </button>
        </form>
</CSSTransition>
          ): (
            <CSSTransition key="normal" timeout={500} classNames="task-text">
            <li className="Todo-task" onClick={toggleTodo}>
                  {task}
            </li>
            </CSSTransition>
          )}
           
             <div className= "todo-buttons">
             <button onClick={() => setIsEdit(true)}>
                       <i className = "fas fa-pen" />
                   </button>
                   <button onClick={removeTodo}>
                   <i className="fas fa-trash"></i>
                   </button>
             </div>
      </TransitionGroup>
    )
}

export default Todo
