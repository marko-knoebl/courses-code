import React, { useState } from "react";

const initialTodos = [
  { id: 1, title: "foo", completed: false },
  { id: 2, title: "bar", completed: true },
];

function App() {
  // functions that manage todos
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(title: string) {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }
  function setTodoCompleted(id: number, completed: boolean) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: completed } : todo
    );
    setTodos(newTodos);
  }

  // code that handles form UI
  const [newTitle, setNewTitle] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    addTodo(newTitle);
    setNewTitle("");
  }

  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(event) =>
                setTodoCompleted(todo.id, event.target.checked)
              }
            />
            {todo.completed ? "DONE" : "TODO"}: {todo.title}
          </li>
        ))}
      </ul>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          new title:{" "}
          <input
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
