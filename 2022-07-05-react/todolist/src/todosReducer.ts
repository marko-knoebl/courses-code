import { Todo } from "./types";

export function todosReducer(
  state: Array<Todo>,
  action: { type: string; payload?: any }
): Array<Todo> {
  switch (action.type) {
    case "addTodo":
      let maxId = 0;
      for (let todo of state) {
        maxId = Math.max(maxId, todo.id);
      }
      const newTodo: Todo = {
        id: maxId + 1,
        title: action.payload,
        completed: false,
      };
      const newTodos: Array<Todo> = [...state, newTodo];
      return newTodos;
    case "removeTodo":
      return state.filter((todo) => todo.id !== action.payload);
    case "setTodoCompleted":
      // payload: {id: number, completed: boolean}
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          // verboten: todo.title = editTitle
          const newTodo = { ...todo, completed: action.payload.completed };
          return newTodo;
        } else {
          return todo;
        }
      });
    case "setTitle":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          // verboten: todo.title = editTitle
          const newTodo = { ...todo, title: action.payload.title };
          return newTodo;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
