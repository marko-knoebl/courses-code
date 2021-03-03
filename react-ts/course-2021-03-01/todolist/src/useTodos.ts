import { useState, useEffect, useReducer } from "react";
import { Todo } from "./Todo";
import { fetchTodos } from "./todosApi";

type TodosAction =
  | { type: "deleteTodo"; payload: number }
  | { type: "addTodo"; payload: string }
  | { type: "changeChecked"; payload: { id: number; newChecked: boolean } }
  | { type: "setTodos"; payload: Array<Todo> };

function todosReducer(state: Array<Todo>, action: TodosAction): Array<Todo> {
  switch (action.type) {
    case "deleteTodo":
      return state.filter((t) => t.id !== action.payload);
    case "addTodo":
      return [
        ...state,
        {
          id: Math.max(...state.map((t) => t.id), 0) + 1,
          title: action.payload,
          completed: false,
        },
      ];
    case "changeChecked":
      // behalte die meisten Einträge in todos bei,
      // ändere einen Eintrag ab
      return state.map((t) => {
        if (t.id === action.payload.id) {
          // ändern
          return { ...t, completed: action.payload.newChecked };
        } else {
          // unverändert beibehalten
          return t;
        }
      });
    case "setTodos":
      return action.payload;
    default:
      throw new Error("unknown action");
  }
}

function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function loadFromLocalStorage() {
    const todosStr = localStorage.getItem("todos");
    if (todosStr !== null) {
      const lsTodos = JSON.parse(todosStr);
      dispatch({ type: "setTodos", payload: lsTodos });
    }
  }
  function deleteTodo(todo: Todo) {
    dispatch({ type: "deleteTodo", payload: todo.id });
  }

  function changeChecked(todo: Todo, checked: boolean) {
    dispatch({
      type: "changeChecked",
      payload: { id: todo.id, newChecked: checked },
    });
  }

  function addTodo(newTitle: string) {
    dispatch({ type: "addTodo", payload: newTitle });
  }

  async function loadTodosAsync() {
    const todos = await fetchTodos();
    dispatch({ type: "setTodos", payload: todos });
  }

  function loadTodos() {
    fetchTodos().then((todos) => {
      dispatch({ type: "setTodos", payload: todos });
    });
  }
  useEffect(loadFromLocalStorage, []);

  function saveToLocalStorage() {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
  useEffect(saveToLocalStorage, [todos]);

  // useEffect(() => {
  //   loadTodosAsync();
  // }, []);

  return {
    todos,
    loadFromLocalStorage,
    deleteTodo,
    changeChecked,
    addTodo,
    loadTodosAsync,
    loadTodos,
  };
}
export default useTodos;
