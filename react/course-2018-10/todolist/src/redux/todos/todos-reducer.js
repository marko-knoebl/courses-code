import {
  ADD_TODO_SUCCESS,
  TOGGLE_TODO,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_REQUEST,
  LOAD_TODOS_GRAPHQL_SUCCESS
} from '../constants';

const initialState = {
  maxId: 1,
  todos: [
    { id: 0, title: 'abc', completed: false },
    { id: 1, title: 'def', completed: true }
  ],
  isLoading: false
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        maxId: action.todo.id,
        todos: [
          ...state.todos,
          { ...action.todo }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            action.id === todo.id
              ? { ...todo, completed: !todo.completed }
              : todo
        )
      };
    case LOAD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
        maxId: 200,
        isLoading: false
      };
    case LOAD_TODOS_GRAPHQL_SUCCESS:
      return {
        ...state,
        todos: action.todos,
        // set the maxId to the maximum id of all todos
        maxId: action.todos.reduce((acc, action) => {
          console.log(acc, action);
          return Math.max(Number(action.id), acc);
        }, -1)
      };
    default:
      return state;
  }
};

export default todosReducer;
