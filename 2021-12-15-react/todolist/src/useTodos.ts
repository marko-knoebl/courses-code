import { useEffect, useState } from "react";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

const initialTodos: Array<Todo> = [
  { id: 1, title: "foo", completed: false },
  { id: 2, title: "bar", completed: true },
];

function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function addTodo(title: string): void {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function changeCompleted(id: number, completed: boolean) {
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

  async function loadTodos() {
    const todos = await fetchTodos();
    setTodos(todos);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return { todos, addTodo, deleteTodo, changeCompleted, loadTodos };
}

export default useTodos;
