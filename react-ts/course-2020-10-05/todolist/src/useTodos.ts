import { useEffect, useReducer } from "react";
import todosReducer from "./todosReducer";

function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 1, title: "Einkaufen", completed: false },
    { id: 2, title: "Steuererklärung", completed: true },
    { id: 3, title: "React lernen", completed: false },
  ]);

  function toggleTodo(id: number) {
    dispatch({ type: "toggleTodo", payload: id });
  }

  function deleteTodo(id: number) {
    dispatch({ type: "deleteTodo", payload: id });
  }

  function addTodo(title: string) {
    dispatch({ type: "addTodo", payload: title });
  }

  function reload() {
    loadTodos();
  }

  const loadTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        const newTodos = todos.map(
          (todo: {
            id: number;
            title: string;
            completed: boolean;
            userId: number;
          }) => ({
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
          })
        );
        dispatch({ type: "setTodos", payload: newTodos });
      });
  };
  useEffect(loadTodos, []);

  return { todos, toggleTodo, deleteTodo, addTodo, reload };
}

export default useTodos;
