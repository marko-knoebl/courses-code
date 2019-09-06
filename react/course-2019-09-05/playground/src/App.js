import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Slideshow from "./Slideshow";
import Rating from "./Rating";
import ToggleButton from "./ToggleButton";

function App() {
  const [input1, setInput1] = useState("placeholder");
  const [coinText, setCoinText] = useState(
    Math.random() < 0.5 ? "Kopf" : "Zahl"
  );
  const [todos, setTodos] = useState([
    { id: 1, title: "Einkaufen", completed: false },
    { id: 2, title: "Steuererklärung", completed: false },
    { id: 3, title: "Putzen", completed: true }
  ]);
  const [rating1, setRating1] = useState(3);
  const [myOption, setMyOption] = useState(true);

  const baseUrl = "https://en.wikipedia.org/wiki/";
  const articleName = "ReactJS";

  return (
    <div className="App">
      <h1>Playground</h1>
      <div>Ein Jahr hat {365 * 24} Stunden</div>
      <div>Heute ist der {new Date().toLocaleDateString()}</div>
      <div>{coinText}</div>
      <div>
        <a href={baseUrl + articleName}>{articleName}</a>
      </div>
      <div>
        <button onClick={alert}>Click me!</button>
      </div>
      <h2>Counter</h2>
      <Counter />
      <h2>Slideshow</h2>
      <Slideshow />
      <h2>inputs</h2>
      <input
        value={input1}
        onChange={event => {
          setInput1(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setInput1("");
        }}
      >
        clear
      </button>
      {input1.toUpperCase()}
      <h2>Todo</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? "DONE" : "TODO"}: {todo.title}
          </li>
        ))}
      </ul>
      <h2>Rating</h2>
      <Rating
        stars={rating1}
        onChange={newRating1 => {
          setRating1(newRating1);
        }}
      />
      <h2>toggle button</h2>
      <ToggleButton
        active={myOption}
        onToggle={newIsActive => {
          setMyOption(newIsActive);
        }}
      />
      {myOption && <div>Hello</div>}
    </div>
  );
}

export default App;
