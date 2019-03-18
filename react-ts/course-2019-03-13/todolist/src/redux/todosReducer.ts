import { Action } from 'redux';
import TodosState from './TodosState';
import { AppAction } from './rootReducer';
import TodoType from '../TodoType';

interface AddTodoAction extends Action {
  type: 'ADD_TODO';
  payload: {
    title: string;
  };
}

interface TodoCompletedAction extends Action {
  type: 'TODO_COMPLETED';
  payload: {
    id: number;
  };
}

interface FetchTodosStartAction extends Action {
  type: 'FETCH_TODOS_START';
}

interface FetchTodosSuccessAction extends Action {
  type: 'FETCH_TODOS_SUCCESS';
  payload: {
    todos: Array<TodoType>;
  };
}

interface FetchTodosErrorAction extends Action {
  type: 'FETCH_TODOS_ERROR';
}

export type TodosAction =
  | AddTodoAction
  | TodoCompletedAction
  | FetchTodosStartAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction;

const initialState: TodosState = {
  todos: [
    { id: 1, title: 'groceries', completed: false },
    { id: 2, title: 'gardening', completed: true },
    { id: 3, title: 'abc', completed: false }
  ],
  isFetching: false,
  hasError: false
};

const todosReducer = (
  state: TodosState = initialState,
  action: AppAction
): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.reduce((id, todo) => Math.max(id, todo.id), 0) + 1,
            title: action.payload.title,
            completed: false
          }
        ]
      };
    case 'TODO_COMPLETED':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: true };
          }
          return todo;
        })
      };
    case 'FETCH_TODOS_START':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload.todos,
        isFetching: false,
        hasError: false
      };
    case 'FETCH_TODOS_ERROR':
      return {
        ...state,
        todos: [],
        isFetching: false,
        hasError: true
      };
    default:
      return state;
  }
};

export default todosReducer;
