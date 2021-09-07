import { useEffect, useState } from "react";
import { fetchTodos } from "./todosApi";

import { Todo } from "./types";

const initialTodos: Array<Todo> = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false },
];

function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  function addTodo(title: string): void {
    const maxId = Math.max(...todos.map((todo) => todo.id), 0);
    const newTodos = [
      ...todos,
      { id: maxId + 1, title: title, completed: false },
    ];
    setTodos(newTodos);
  }

  function setTodoStatus(id: number, completed: boolean) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: completed };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  function deleteTodo(id: number): void {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
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

  return { todos, addTodo, setTodoStatus, deleteTodo, loadTodos };
}

export default useTodos;
