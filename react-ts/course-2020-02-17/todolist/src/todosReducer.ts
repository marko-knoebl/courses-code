import { Todo } from "./Todo";

type Action = {
  type: string;
  payload: any;
};

const todosReducer = (oldState: Array<Todo>, action: Action): Array<Todo> => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...oldState,
        { id: oldState.length + 1, title: action.payload, completed: false }
      ];
    case "TOGGLE_TODO":
      return oldState.map(todo => {
        if (action.payload === todo.id) {
          // return a todo with its completed state switched
          return { ...todo, completed: !todo.completed };
        } else {
          // return an unmodified todo
          return todo;
        }
      });
    case "LOAD_TODOS":
      return action.payload;
    default:
      return oldState;
  }
};

export default todosReducer;
