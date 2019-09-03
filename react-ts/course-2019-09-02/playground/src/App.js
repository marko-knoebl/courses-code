import React, { useState } from "react";
import Counter from "./Counter";
import Slideshow from "./Slideshow";
import Rating from "./Rating";
import "./App.css";
import ToggleButton from "./ToggleButton";

const getImgUrl = id => "https://picsum.photos/200?image=" + id.toString();

const sayHello = event => {
  alert("Hello");
};

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "groceries", completed: false },
    { id: 2, title: "cooking", completed: true },
    { id: 3, title: "gardening", completed: false }
  ]);
  const [inputText, setInputText] = useState("");
  const [rating1, setRating1] = useState(3);
  const [option1, setOption1] = useState(false);

  const articleName = "ReactJS";

  return (
    <div className="App">
      <h1> My App</h1>
      <div>Ein Jahr hat {365 * 24} Stunden</div>
      <div>Heute ist der {new Date().toLocaleDateString()}</div>
      <div>{Math.random() > 0.5 ? "heads" : "tails"}</div>
      <div>
        <a href={"https://en.wikipedia.org/wiki/" + articleName}>
          some article
        </a>
      </div>
      <div>
        <img src={getImgUrl(3)} alt="random" />
      </div>
      <div>
        <button onClick={sayHello}>Say Hello</button>
        <button>asd</button>
      </div>
      <Counter />
      <Slideshow />
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? "todo completed" : "todo"}
          >
            {todo.title}
          </li>
        ))}
      </ul>
      <h2>Inputs</h2>
      <input
        value={inputText}
        onChange={event => {
          setInputText(event.target.value);
        }}
      />
      <div>value: {inputText.toUpperCase()}</div>
      <div style={{ fontSize: "3em" }}>
        <Rating stars={rating1} onChange={setRating1} />
      </div>
      <div>
        <ToggleButton
          active={option1}
          onToggle={newIsActive => {
            setOption1(newIsActive);
          }}
        />
      </div>
    </div>
  );
}

export default App;
