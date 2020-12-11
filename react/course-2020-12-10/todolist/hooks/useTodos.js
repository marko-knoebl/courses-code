import { useState, useEffect } from "react";

function useTodos(initialTodos) {
  initialTodos = initialTodos || [
    { id: 1, title: "groceries", completed: true },
    { id: 2, title: "taxes", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [isLoading, setIsLoading] = useState(false);

  const loadFromServer = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
        setIsLoading(false);
      });
  };
  useEffect(loadFromServer, []);

  function deleteCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }
  
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => id != todo.id));
  }

  return {
    todos,
    toggleTodo,
    deleteTodo,
    loadFromServer,
    deleteCompleted,
    // loadFromLocalStorage,
    // saveToLocalStorage,
    isLoading,
  };
}

export default useTodos;
