import { combineReducers } from 'redux';
import newTodoReducer from './new-todo/new-todo-reducer';
import todosReducer from './todos/todos-reducer';

const rootReducer = combineReducers({
  newTodo: newTodoReducer,
  todoList: todosReducer
});

export default rootReducer;
