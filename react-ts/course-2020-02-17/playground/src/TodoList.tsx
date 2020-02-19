import React, { useState } from "react";

const initialTodos = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false }
];

function TodoList() {

  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      <h2>Todo</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
