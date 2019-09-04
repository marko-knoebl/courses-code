import TodoType from "../TodoType";
import { Action } from "./Action";

const initialState = [
  { id: 1, title: "learn React", completed: false },
  { id: 2, title: "groceries", completed: true }
];

const todosReducer = (
  state: Array<TodoType> = initialState,
  action: Action
): Array<TodoType> => {
  // beispiel:
  // state = []
  // action: {type: "ADD_TODO", title: "ABC"}
  // rückgabewert: [{id: 1, title: "ABC", completed: false}]
  switch (action.type) {
    case "ADD_TODO":
      const highestId = state.reduce(
        (accumulator, todo) => Math.max(accumulator, todo.id),
        0
      );
      return [
        ...state,
        { id: highestId + 1, title: action.title, completed: false }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "COMPLETE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: true } : todo
      );
    case "DELETE_ALL_COMPLETED":
      return state.filter(todo => !todo.completed);
    case "DELETE_ALL":
      return [];
    case "RECEIVE_TODOS":
      return action.todos;
    default:
      // unbekannte Action - ändere den State nicht ab
      return state;
  }
};

export default todosReducer;
