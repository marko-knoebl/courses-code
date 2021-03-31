import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Todos = Array<Todo>;

type a = ReturnType<typeof useState>;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Einkaufen", completed: false },
    { id: 2, title: "Steuererklärung", completed: true },
  ]);
  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="App">
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, { id: 1, completed: false, title: newTitle }]);
          setNewTitle("");
        }}
      >
        <label>
          new title:
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default App;
