import { useEffect, useReducer, useState } from "react";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

// type Action = { type: string; paylaod?: any };

type Action =
  | { type: "addTodo"; payload: string }
  | { type: "addTodos"; payload: Array<Todo> }
  | { type: "deleteTodo"; payload: number }
  | { type: "setTodoState"; payload: { id: number; completed: boolean } };

function todosReducer(oldTodos: Array<Todo>, action: Action): Array<Todo> {
  switch (action.type) {
    case "addTodo":
      let maxId: number = 0;
      for (let todo of oldTodos) {
        if (todo.id >= maxId) {
          maxId = todo.id;
        }
      }
      const newId = maxId + 1;
      return [
        ...oldTodos,
        { id: newId, title: action.payload, completed: false },
      ];
    case "addTodos":
      return [...oldTodos, ...action.payload];
    case "setTodoState":
      return oldTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: action.payload.completed };
        }
        return todo;
      });
    case "deleteTodo":
      return oldTodos.filter((todo) => todo.id !== action.payload);
    default:
      // ignorieren
      return oldTodos;
  }
}

function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function addTodo(title: string): void {
    dispatch({ type: "addTodo", payload: title });
  }
  function setTodoState(id: number, completed: boolean): void {
    dispatch({ type: "setTodoState", payload: { id, completed } });
  }
  function deleteTodo(id: number): void {
    dispatch({ type: "deleteTodo", payload: id });
  }
  async function loadTodos() {
    setIsLoading(true);
    const apiTodos = await fetchTodos();
    dispatch({ type: "addTodos", payload: apiTodos });
    setIsLoading(false);
  }

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  return {
    todos,
    addTodo,
    setTodoState,
    deleteTodo,
    loadTodos,
    isLoading,
  };
}

export default useTodos;
