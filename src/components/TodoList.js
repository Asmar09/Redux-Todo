import React from 'react';
import TodoForms from './TodoForms';
import './TodoList.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useSelector , useDispatch} from 'react-redux';
import {addTodo, completeTodo, removeTodo, editTodo} from '../redux/action';
import Todo from './Todo';

const TodoList = () => {
    const state = useSelector(state => ({...state.todos}))
    const dispatch = useDispatch()

      const create = (newTodo) =>{
          dispatch(addTodo(newTodo))
      }
      const edit = (id, editTask) =>{
        dispatch(editTodo({id, editTask}))
    }
    return (
        <div className="TodoList">
               <h1>ToDo List</h1>
               <TodoForms createTodo={create} />
              <ul>
                  <TransitionGroup className="todo-list">
                         {state.todos && state.todos.map((todo) =>{
                             return(
                                 <CSSTransition key={todo.id} classNames="todo">
                                    <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      complete={todo.complete}
      toggleTodo={() => dispatch(completeTodo(todo))}
      removeTodo={() => dispatch(removeTodo(todo))}
      editTodo={edit}
                                    />
                                 </CSSTransition>
                             )
                         })} 
                  </TransitionGroup>
              </ul>
        </div>
    )
}

export default TodoList
