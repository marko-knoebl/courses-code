import TodoType from '../TodoType';

type AddTodoAction = {
  type: 'ADD_TODO';
  payload: {
    title: string;
  };
};

type ToggleTodoAction = {
  type: 'TOGGLE_TODO';
  payload: {
    id: number;
  };
};

type LoadTodosStartAction = {
  type: 'LOAD_TODOS_START';
};

type LoadTodosSuccessAction = {
  type: 'LOAD_TODOS_SUCCESS';
  payload: {
    todos: Array<TodoType>;
  };
};

type TodosAction =
  | AddTodoAction
  | ToggleTodoAction
  | LoadTodosStartAction
  | LoadTodosSuccessAction;

export default TodosAction;
