import React, { useReducer } from "react";
import "./TodoApp.css";

import todosReducer from "./todosReducer";

function TodoApp() {
  const [todos, dispatchAction] = useReducer(todosReducer, [
    { id: 1, title: "groceries", completed: false },
    { id: 2, title: "gardening", completed: false }
  ]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
        {todos.map(todo => (
          <li>{todo.title}</li>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
