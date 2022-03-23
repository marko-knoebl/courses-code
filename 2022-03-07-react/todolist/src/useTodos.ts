import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { fetchTodos } from "./todosApi";

function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function addTodo(title: string): void {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }
  function setTodoCompleted(id: number, completed: boolean): void {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: completed } : todo
    );
    setTodos(newTodos);
  }
  function removeTodo(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  async function loadTodos() {
    setIsLoading(true);
    const todosApi = await fetchTodos();
    setTodos((todos) => [...todos, ...todosApi.slice(0, 10)]);
    setIsLoading(false);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return { todos, isLoading, addTodo, setTodoCompleted, removeTodo, loadTodos };
}

export { useTodos };
