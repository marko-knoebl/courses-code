import TodoType from '../TodoType';
import { Action } from 'redux';

interface TodosState {
  todos: Array<TodoType>;
  isFetching: boolean;
}

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

type TodosAction = AddTodoAction | TodoCompletedAction;

const initialState: TodosState = {
  todos: [
    { id: 1, title: 'groceries', completed: false },
    { id: 2, title: 'gardening', completed: true },
    { id: 3, title: 'abc', completed: false }
  ],
  isFetching: false
};

const todosReducer = (
  state: TodosState = initialState,
  action: TodosAction
) => {
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
    default:
      return state;
  }
};

export default todosReducer;
