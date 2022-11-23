import { Todo } from "./types";

interface Action {
  type: "addTodo" | "deleteTodo" | "setTodoCompleted" | "setTodos";
  payload?: any;
}

// payload
// { type: "addTodo", payload: "foo" }
// { type: "setTodoCompleted", payload: { id: 1, completed: true } }

type State = Array<Todo>;

export function todosReducer(state: State, action: Action): State {
  switch (action.type) {
    case "addTodo":
      let maxId = 0;
      for (let todo of state) {
        maxId = Math.max(maxId, todo.id);
      }
      return [
        ...state,
        { id: maxId + 1, title: action.payload, completed: false },
      ];
    case "setTodoCompleted":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.payload);
    case "setTodos":
      return action.payload;
    default:
      return state;
  }
}
