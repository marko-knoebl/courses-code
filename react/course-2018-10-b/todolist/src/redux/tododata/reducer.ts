import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_SUCCESS
} from './constants';
import {
  IDeleteTodoPayload,
  IAddTodoPayload,
  ITodoAction,
  IToggleTodoPayload,
  IFetchTodosSuccessPayload
} from './interfaces';

const initialState = {
  todos: [
    { id: 1, title: 'shopping', completed: false },
    { id: 2, title: 'cleaning', completed: true }
  ],
  maxId: 2
};

const tododata = (state = initialState, action: ITodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.maxId + 1,
            title: (action.payload as IAddTodoPayload).title,
            completed: false
          }
        ],
        maxId: state.maxId + 1
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          todo => (action.payload as IDeleteTodoPayload).id !== todo.id
        )
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          completed:
            todo.id === (action.payload as IToggleTodoPayload).id
              ? !todo.completed
              : todo.completed
        }))
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: (action.payload as IFetchTodosSuccessPayload).todos,
        // nicht in der Praxis machen:
        maxId: (action.payload as IFetchTodosSuccessPayload).todos.length
      };
    default:
      return state;
  }
};

export default tododata;
