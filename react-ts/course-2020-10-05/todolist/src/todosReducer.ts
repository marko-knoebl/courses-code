import { Todo } from "./Todo";

type State = Array<Todo>;

type Action = {
  type: string;
  payload?: any;
};
type ToggleTodoAction = Action & {
  type: "toggleTodo";
  payload: number;
};
type DeleteTodoAction = Action & {
  type: "deleteTodo";
  payload: number;
};
type AddTodoAction = Action & {
  type: "addTodo";
  payload: string;
};
type SetTodosAction = Action & {
  type: "setTodos";
  payload: Array<Todo>;
};
type TodosAction =
  | ToggleTodoAction
  | DeleteTodoAction
  | AddTodoAction
  | SetTodosAction;

function todosReducer(state: State, action: TodosAction): State {
  switch (action.type) {
    case "toggleTodo":
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    case "deleteTodo":
      return state.filter((t) => t.id !== action.payload);
    case "addTodo":
      const newId = Math.max(...state.map((todo) => todo.id), 0) + 1;
      return [...state, { id: newId, title: action.payload, completed: false }];
    case "setTodos":
      return action.payload;
  }
}

export default todosReducer;
