import { Todo } from "./types";

type AddTodoAction = { type: "addTodo"; payload: string };
type SetTodoStatusAction = {
  type: "setTodoStatus";
  payload: { id: number; completed: boolean };
};
type DeleteTodoAction = { type: "deleteTodo"; payload: number };
type SetTodosAction = { type: "setTodos"; payload: Array<Todo> };

type TodosAction =
  | AddTodoAction
  | SetTodoStatusAction
  | DeleteTodoAction
  | SetTodosAction;

//type Action = { type: string; payload?: any };

function todosReducer(oldState: Array<Todo>, action: TodosAction): Array<Todo> {
  switch (action.type) {
    case "addTodo":
      const maxId = Math.max(...oldState.map((todo) => todo.id), 0);
      return [
        ...oldState,
        { id: maxId + 1, title: action.payload, completed: false },
      ];
    case "setTodoStatus":
      return oldState.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: action.payload.completed };
        } else {
          return todo;
        }
      });
    case "deleteTodo":
      return oldState.filter((todo) => todo.id !== action.payload);
    case "setTodos":
      return action.payload;
    default:
      return oldState;
  }
}

export default todosReducer;
