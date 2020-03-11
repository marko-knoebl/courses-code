import React, { useState } from "react";
import "./App.css";

import Rating from "./Rating";
import SpaceXLaunch from "./SpaceXLaunch";
import ThemeContext, { ThemeName } from "./ThemeContext";

const initialTodos = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false }
];

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const [product1Rating, setProduct1Rating] = useState(3);
  const [product2Rating, setProduct2Rating] = useState(2);
  const [theme, setTheme] = useState<ThemeName>("default");

  const isValid = username.length >= 3 && password.length >= 5;

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>playground</h1>
        <h2>Theme settings</h2>
        <button onClick={() => setTheme("default")}>default</button>
        <button onClick={() => setTheme("fancy")}>fancy</button>
        <h2>SpaceX Launch</h2>
        <SpaceXLaunch />
        <h2>Rating</h2>
        product 1 rating:{" "}
        <Rating
          stars={product1Rating}
          onStarsChange={newStars => {
            setProduct1Rating(newStars);
          }}
        />
        <Rating stars={product2Rating} onStarsChange={setProduct2Rating} />
        <h2>Todo</h2>
        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              style={{
                margin: 8,
                textDecorationLine: todo.completed ? "line-through" : ""
              }}
            >
              {todo.completed ? "DONE" : "TODO"}: {todo.title}
            </li>
          ))}
        </ul>
        <input
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
        <div>length: {name.length}</div>
        <form
          onSubmit={event => {
            event.preventDefault();
            if (isValid) {
              alert(`successfully logged in as ${username}`);
            }
          }}
        >
          <h2>Register</h2>
          <div>
            username:
            <input
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            {username.length < 3 ? "username too short" : ""}
          </div>
          <div>
            password:
            <input
              value={password}
              onChange={event => setPassword(event.target.value)}
              type="password"
            />
          </div>
          <button disabled={!isValid} type="submit">
            register
          </button>
        </form>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
