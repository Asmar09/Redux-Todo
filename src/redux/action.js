
import {COMPLETE_TODO, ADD_TODO , REMOVE_TODO, EDIT_TODO} from './constent';

export const completeTodo = (todo) => ({
      type: COMPLETE_TODO,
      payload: todo
})

export const addTodo = (todo) => ({
      type: ADD_TODO,
      payload: todo
})

export const removeTodo = (todo) => ({
      type: REMOVE_TODO,
      payload: todo
})

export const editTodo = (todo) => ({
      type: EDIT_TODO,
      payload: todo
})