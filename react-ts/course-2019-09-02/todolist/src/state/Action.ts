import TodoType from "../TodoType";

type BaseAction = {
  type: string;
};

type AddTodoAction = BaseAction & {
  type: "ADD_TODO";
  title: string;
};

type DeleteTodoAction = BaseAction & {
  type: "DELETE_TODO";
  id: number;
};

type CompleteTodoAction = BaseAction & {
  type: "COMPLETE_TODO";
  id: number;
};

type DeleteAllCompletedAction = BaseAction & {
  type: "DELETE_ALL_COMPLETED";
};

type DeleteAll = BaseAction & {
  type: "DELETE_ALL";
};

type ReceiveTodosAction = BaseAction & {
  type: "RECEIVE_TODOS";
  todos: Array<TodoType>;
};

export type Action =
  | AddTodoAction
  | DeleteTodoAction
  | CompleteTodoAction
  | DeleteAllCompletedAction
  | DeleteAll
  | ReceiveTodosAction;
