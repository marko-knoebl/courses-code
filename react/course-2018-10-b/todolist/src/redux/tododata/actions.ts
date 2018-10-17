import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
} from './constants';
import { Dispatch } from 'redux';
import ITodo from 'src/ITodo';

const addTodo = (title: string) => ({
  type: ADD_TODO,
  payload: {
    title
  }
});

const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

const fetchTodosStart = () => ({ type: FETCH_TODOS_START });

const fetchTodosSuccess = (todos: ITodo[]) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: {
    todos
  }
});

// asynchrone action
const fetchTodos = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchTodosStart());

    // .... serveranfrage
    fetch('https://jsonplaceholder.typicode.com/todos')
      // warte auf die antwort
      .then(response => response.json())
      // warte auf das Parsen der Antwort
      .then(todoData => {
        dispatch(fetchTodosSuccess(todoData));
      });
  };
};

export { addTodo, deleteTodo, toggleTodo, fetchTodos };
