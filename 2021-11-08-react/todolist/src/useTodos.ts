import { useState, useEffect } from "react";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

const INITIAL_TODOS: Array<Todo> = [
  { id: 1, title: "foo", completed: false },
  { id: 2, title: "bar", completed: true },
];

function useTodos() {
  // todos state
  const [todos, setTodos] = useState<Array<Todo>>(INITIAL_TODOS);

  // functions that manage todos state
  function addTodo(newTitle: string): void {
    let maxId = 0;
    for (let todo of todos) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }
    setTodos([...todos, { id: maxId + 1, title: newTitle, completed: false }]);
  }

  function deleteTodo(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function setTodoCompleted(id: number, completed: boolean): void {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        }
        return todo;
      })
    );
  }

  function setTodoTitle(id: number, title: string): void {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title };
        }
        return todo;
      })
    );
  }

  const [isLoading, setIsLoading] = useState(false);

  async function loadTodos() {
    setIsLoading(true);
    const apitodos = await fetchTodos();
    setTodos(apitodos);
    setIsLoading(false);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return {
    todos,
    addTodo,
    deleteTodo,
    setTodoCompleted,
    setTodoTitle,
    isLoading,
    loadTodos,
  };
}

export default useTodos;
