import React, { useReducer } from "react";
import "./TodoApp.css";

import todosReducer from "./todosReducer";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, dispatchAction] = useReducer(todosReducer, [
    { id: 1, title: "groceries", completed: true },
    { id: 2, title: "gardening", completed: false }
  ]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoList todos={todos} />
      <div>
        <button onClick={() => dispatchAction({ type: "DELETE_COMPLETED" })}>
          delete completed todos
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
