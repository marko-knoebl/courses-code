import { useEffect, useState } from "react";
import { Todo } from "./types";
import { fetchTodos } from "./todosApi";

type TodosAction =
  | { type: "addTodo"; payload: string }
  | { type: "setTodoCompleted"; payload: { id: number; completed: boolean } }
  | { type: "deleteTodo"; payload: number };

function todosReducer(state: Array<Todo>, action: TodosAction): Array<Todo> {
  switch (action.type) {
    case "addTodo":
      const title = action.payload;
      const todos = state;
      let maxId = 0;
      for (let todo of todos) {
        if (todo.id >= maxId) {
          maxId = todo.id;
        }
      }
      return [...todos, { id: maxId + 1, title: title, completed: false }];
    case "setTodoCompleted":
      return state.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, completed: action.payload.completed };
        return todo;
      });
    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.payload);
  }
}

function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function addTodo(title: string) {
    let maxId = 0;
    for (let todo of todos) {
      if (todo.id >= maxId) {
        maxId = todo.id;
      }
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: completed };
        return todo;
      })
    );
  }
  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const [isLoading, setIsLoading] = useState(false);

  async function loadTodos() {
    setIsLoading(true);
    const apiTodos = await fetchTodos();
    setTodos(apiTodos);
    // setTodos((newestTodos) => [...newestTodos, ...apiTodos]);
    setIsLoading(false);
  }
  useEffect(() => {
    loadTodos();
  }, []);

  return {
    todos,
    isLoading,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    loadTodos,
  };
}

export default useTodos;
