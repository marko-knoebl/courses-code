import { useEffect, useState } from "react";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

const initialTodos: Array<Todo> = [
  { id: 1, title: "foo", completed: false },
  { id: 2, title: "bar", completed: true },
];

function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  function addTodo(title: string): void {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { title: title, id: maxId + 1, completed: false }]);
  }

  function changeTodoStatus(id: number, newStatus: boolean): void {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: newStatus } : todo
      )
    );
  }

  function removeTodo(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const [isLoading, setIsLoading] = useState(false);

  async function loadTodos() {
    setIsLoading(true);
    const todos = await fetchTodos();
    setTodos(todos);
    setIsLoading(false);
  }

  useEffect(() => {
    //loadTodos();
  }, []);

  return {
    todos,
    addTodo,
    changeTodoStatus,
    removeTodo,
    isLoading,
  };
}

export default useTodos;
