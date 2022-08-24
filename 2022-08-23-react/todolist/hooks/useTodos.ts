import { useEffect, useState } from "react";
import { fetchTodos } from "../api/todosApi";
import { Todo } from "../types";

export function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  // Möglichkeiten:
  // loading, success, error, idle
  const [loadingStatus, setLoadingStatus] = useState("idle");

  async function loadFromApi() {
    setLoadingStatus("loading");
    try {
      const todosFromApi = await fetchTodos();
      setTodos(todosFromApi);
      setLoadingStatus("success");
    } catch (exception) {
      setLoadingStatus("error");
    }
  }

  function addTodo(title: string): void {
    // get the max id (or 0 if there are no todos)
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }

    const newTodo = { id: maxId + 1, title: title, completed: false };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function setCompleted(id: number, completed: boolean): void {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        } else {
          return todo;
        }
      })
    );
  }

  useEffect(
    () => {loadFromApi()},
    []
  )

  return {
    todos: todos,
    loadingStatus: loadingStatus,
    loadFromApi: loadFromApi,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    setCompleted: setCompleted,
  };
}
