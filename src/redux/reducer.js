
import {COMPLETE_TODO, ADD_TODO, REMOVE_TODO, EDIT_TODO} from './constent';
import {v4 as uuidv4} from 'uuid';

const initialState = {
    todos: []
}

const todoReducer = (state = initialState , action ) =>{
  switch(action.type){
     case ADD_TODO:
         const newTodo = {
            id: uuidv4(),
            task: action.payload,
            complete: false
         }
         const addedTodo = [...state.todos, newTodo];
         return {
           ...state,
           todos: addedTodo
         }
      case REMOVE_TODO:
            const filterTodo = state.todos.filter((t) => t.id !== action.payload.id)
            return {
              ...state,
              todos: filterTodo
            }
      case EDIT_TODO:
           const editTodo = state.todos.map((t) => {
             if(t.id === action.payload.id){
               return {...t, task: action.payload.editTask}
             }
             return t;
           })
            return {
              ...state,
              todos: editTodo
            }
      case COMPLETE_TODO: 
        const toggleTodo = state.todos.map((todo)=>
          todo.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : todo
         )
        return {
            ...state,
            todos: toggleTodo
        }
        default: 
        return state
  }
}

export default todoReducer