import TodoInterface from './TodoInterface';

interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  payload: number;
}

interface DeleteTodoAction {
  type: 'DELETE_TODO';
  payload: number;
}

type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;

const todosReducer = (todos: Array<TodoInterface>, action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
          title: action.payload,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return todos.map(oldTodo =>
        oldTodo.id === action.payload
          ? {
              ...oldTodo,
              completed: !oldTodo.completed
            }
          : oldTodo
      );
    case 'DELETE_TODO':
      return todos.filter(todo => todo.id !== action.payload);
    default:
      throw Error('unknown action');
  }
};

export default todosReducer;
