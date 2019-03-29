import TodoType from '../TodoType';
import TodosAction from './todosActions';

export type TodosState = {
  todos: Array<TodoType>;
  isLoading: boolean;
};

const initialState: TodosState = {
  todos: [
    { id: 1, title: 'groceries', completed: false },
    { id: 2, title: 'taxes', completed: true }
  ],
  isLoading: false
};

const todosReducer = (
  oldState: TodosState = initialState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...oldState,
        todos: [
          ...oldState.todos,
          {
            id: oldState.todos.length + 1,
            title: action.payload.title,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...oldState,
        todos: oldState.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'LOAD_TODOS_START':
      return {
        ...oldState,
        isLoading: true
      };
    case 'LOAD_TODOS_SUCCESS':
      return {
        ...oldState,
        todos: action.payload.todos,
        isLoading: false
      };
    default:
      return oldState;
  }
};

export default todosReducer;
