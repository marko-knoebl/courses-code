import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "groceries", completed: false },
    { id: 2, title: "taxes", completed: true }
  ]);
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodos = [
      ...todos,
      { id: todos[todos.length - 1].id + 1, title: newTitle, completed: false }
    ];
    setTodos(newTodos);
    setNewTitle("");
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => {
              // change the todos - one item will be toggled
              setTodos(
                todos.map(t => {
                  if (t.id === todo.id) {
                    // toggle the todo
                    return { ...t, completed: !t.completed };
                  }
                  return t;
                })
              );
            }}
            className={todo.completed ? "todoitem completed" : "todoitem"}
          >
            {todo.completed ? "DONE: " : "TODO: "}
            {todo.title}
            <button
              onClick={event => {
                // stop "event bubbling" to the parent element
                event.stopPropagation();
                setTodos(todos.filter(t => t.id !== todo.id));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          value={newTitle}
          onChange={event => setNewTitle(event.target.value)}
        />
        <button>Add</button>
      </form>
      <div>
        <button
          onClick={() => {
            setTodos(todos.filter(t => !t.completed));
          }}
        >
          delete completed todos
        </button>
      </div>
    </div>
  );
};

export default App;
