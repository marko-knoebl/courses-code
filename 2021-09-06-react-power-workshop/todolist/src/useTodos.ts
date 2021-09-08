import { useEffect, useReducer, useState } from "react";
import { fetchTodos } from "./todosApi";
import todosReducer from "./todosReducer";

import { Todo } from "./types";

const initialTodos: Array<Todo> = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false },
];

function useTodos() {

  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  function addTodo(title: string): void {
    // Auslösen einer Action
    dispatch({ type: "addTodo", payload: title });
  }

  function setTodoStatus(id: number, completed: boolean) {
    dispatch({ type: "setTodoStatus", payload: { id, completed } });
  }

  function deleteTodo(id: number): void {
    dispatch({ type: "deleteTodo", payload: id });
  }

  function setTodos(todos: Array<Todo>): void {
    dispatch({ type: "setTodos", payload: todos });
  }

  async function loadTodos() {
    const todos = await fetchTodos();
    setTodos(todos);
  }

  // interaktion mit localstorage

  // laden
  useEffect(() => {
    const lsTodos = localStorage.getItem("todos");
    if (lsTodos !== null) {
      setTodos(JSON.parse(lsTodos));
    }
  }, []);

  // speichern
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // useEffect(() => {
  //   loadTodos();
  // }, []);

  return { todos: todos, addTodo, setTodoStatus, deleteTodo, loadTodos };
}

export default useTodos;
