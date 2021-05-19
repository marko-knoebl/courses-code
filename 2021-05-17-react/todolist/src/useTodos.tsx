import { useEffect, useReducer, useState } from "react";
import { Todo } from "./types";
import { fetchTodos } from "./todosApi";

type AddTodoAction = { type: "addTodo"; payload: string };
type DeleteTodoAction = { type: "deleteTodo"; payload: number };
type ToggleTodoAction = { type: "toggleTodo"; payload: number };
type DeleteCompletedTodosAction = { type: "deleteCompletedTodos" };
type SetTodosAction = { type: "setTodos"; payload: Array<Todo> };

type Action =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction
  | DeleteCompletedTodosAction
  | SetTodosAction;

function todosReducer(state: Array<Todo>, action: Action): Array<Todo> {
  switch (action.type) {
    case "addTodo":
      let maxId = 0;
      for (let todo of state) {
        if (todo.id > maxId) {
          maxId = todo.id;
        }
      }
      return [
        ...state,
        { id: maxId + 1, title: action.payload, completed: false },
      ];
    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.payload);
    case "toggleTodo":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          // "abändern"
          return { ...todo, completed: !todo.completed };
        } else {
          // nicht "abändern"
          return todo;
        }
      });
    case "deleteCompletedTodos":
      return state.filter((todo) => !todo.completed);
    case "setTodos":
      return action.payload;
  }
}

export function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 1, title: "foo", completed: false },
    { id: 2, title: "bar", completed: true },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  // Funktionen, die den State ändern
  function addTodo(newTitle: string): void {
    dispatch({ type: "addTodo", payload: newTitle });
  }

  function toggleTodo(id: number): void {
    dispatch({ type: "toggleTodo", payload: id });
  }

  function deleteCompletedTodos(): void {
    dispatch({ type: "deleteCompletedTodos" });
  }

  function deleteTodo(id: number): void {
    dispatch({ type: "deleteTodo", payload: id });
  }

  async function loadTodosAsync() {
    setIsLoading(true);
    const todos = await fetchTodos();
    setIsLoading(false);
    dispatch({ type: "setTodos", payload: todos });
  }

  // useEffect(() => {
  //   loadTodosAsync();
  // }, []);

  return {
    todos,
    isLoading,
    addTodo,
    toggleTodo,
    deleteCompletedTodos,
    deleteTodo,
    loadTodosAsync,
  };
}
