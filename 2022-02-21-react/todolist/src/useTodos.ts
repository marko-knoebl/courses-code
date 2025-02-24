import { useEffect, useState } from "react";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

const INITIAL_TODOS: Array<Todo> = [
  { id: 1, title: "foo", completed: false },
  { id: 5, title: "bar", completed: true },
  { id: 7, title: "baz", completed: false },
];

function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>(INITIAL_TODOS);
  function addTodo(title: string): void {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
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
  function deleteTodo(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const [isLoading, setIsLoading] = useState(false);
  async function loadTodos() {
    setIsLoading(true);
    const todos = (await fetchTodos()).slice(0, 10);
    setTodos(todos);
    setIsLoading(false);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    isLoading,
    loadTodos,
  };
}

export default useTodos;
