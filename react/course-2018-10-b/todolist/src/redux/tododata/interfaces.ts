import ITodo from 'src/ITodo';

interface IAddTodoPayload {
  title: string;
}

interface IDeleteTodoPayload {
  id: number;
}

interface IToggleTodoPayload {
  id: number;
}

interface IFetchTodosSuccessPayload {
  todos: ITodo[];
}

interface ITodoAction {
  type: string;
  payload:
    | IAddTodoPayload
    | IDeleteTodoPayload
    | IToggleTodoPayload
    | IFetchTodosSuccessPayload;
}

export {
  IAddTodoPayload,
  IDeleteTodoPayload,
  ITodoAction,
  IToggleTodoPayload,
  IFetchTodosSuccessPayload
};
