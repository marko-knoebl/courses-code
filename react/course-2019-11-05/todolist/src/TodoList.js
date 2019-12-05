import React from "react";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map(todo => (
        <li>{todo.title}</li>
      ))}
    </div>
  );
}

export default TodoList;
