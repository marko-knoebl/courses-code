import { useReducer, useEffect, useState } from "react";
import Todo from "./Todo";
import todosReducer from "./todosReducer";

const initialTodos: Array<Todo> = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "taxes", completed: false },
  { id: 3, title: "gardening", completed: true }
];

export default function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [isLoading, setIsLoading] = useState(true);
  const loadTodos = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then((apiTodos: Array<any>) => {
        const todos = apiTodos.map(apiTodo => ({
          id: apiTodo.id,
          title: apiTodo.title,
          completed: apiTodo.completed
        }));
        dispatch({ type: "receiveTodos", payload: todos });
        setIsLoading(false);
      });
  };
  useEffect(loadTodos, []);
  return {
    todos: todos,
    isLoading: isLoading,
    toggleTodo: (id: number) => {
      dispatch({ type: "toggleTodo", payload: id });
    },
    receiveTodos: (todos: Array<Todo>) => {
      dispatch({ type: "receiveTodos", payload: todos });
    },
    deleteAllTodo: () => {
      dispatch({ type: "deleteAllTodos" });
    },
    addTodo: (title: string) => {
      dispatch({ type: "addTodo", payload: title });
    },
    deleteTodo: (id: number) => {
      dispatch({ type: "deleteTodo", payload: id });
    }
  };
}
