import { TodoType } from "../TodoType";
import { TodolistAction } from "./actionTypes";

type TodosState = Array<TodoType>;

const initialState: TodosState = [];

const todosReducer = (
  state: TodosState = initialState,
  action: TodolistAction
) => {
  switch (action.type) {
    case "ADD_TODO":
      let maxId = 0;
      for (let todo of state) {
        if (todo.id > maxId) {
          maxId = todo.id;
        }
      }
      return [
        ...state,
        {
          id: maxId + 1,
          title: action.title,
          completed: false
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id !== action.id ? todo : { ...todo, completed: !todo.completed }
      );
    case "DELETE_ALL_COMPLETED":
      // Möglichkeit 1
      let newTodos = [];
      for (let todo of state) {
        if (!todo.completed) {
          newTodos.push(todo)
        }
      }
      return newTodos;
      // Möglichkeit 2
      return state.filter(todo => !todo.completed);
    case "LOAD_TODOS_SUCCESS":
      // TODO: userIds entfernen, duplikate verhindern
      return [...state, ...action.todos]
    default:
      return state;
  }
};

export default todosReducer;
