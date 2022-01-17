import { useState } from "react";

const initialTodos = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ backgroundColor: todo.completed ? "lightgrey" : "salmon" }}
        >
          {(todo.completed ? "done" : "todo") + ": "}
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default App;
