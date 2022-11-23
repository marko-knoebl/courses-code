import { useState } from "react";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

export default function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, title: "foo", completed: false },
    { id: 2, title: "bar", completed: true },
  ]);

  async function loadFromApi() {
    const todosFromApi = await fetchTodos();
    setTodos(todosFromApi);
  }

  function addTodo(title: string) {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return {
    todos: todos,
    addTodo: addTodo,
    setTodoCompleted: setTodoCompleted,
    deleteTodo: deleteTodo,
    loadFromApi: loadFromApi,
  };
}
