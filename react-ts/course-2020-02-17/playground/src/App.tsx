import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slideshow from "./Slideshow";
import RegistrationForm from "./RegistrationForm";
import TodoList from "./TodoList";
import Rating from "./Rating";
import SpaceXLaunch from "./SpaceXLaunch";

function cointoss() {
  if (Math.random() > 0.5) {
    return "heads";
  }
  return "tails";
}

function App() {
  const articleName = "ReactJS";
  const [count, setCount] = useState(0);
  const [coin, setCoin] = useState(cointoss());
  const [name, setName] = useState("");
  const [rating1, setRating1] = useState(3);

  function hello() {
    console.log("Hello world");
    alert("hello world");
  }

  return (
    <div className="App">
      <SpaceXLaunch />
      <Rating
        stars={rating1}
        onChange={newRtg => {
          setRating1(newRtg);
        }}
      />
      <Slideshow />
      <h1>Playground</h1>
      <div>A year has {365 * 24} hours</div>
      <div>Today is the {new Date().toLocaleDateString()}</div>
      <div>{cointoss()}</div>
      <div>{Math.random() > 0.5 ? "heads" : "tails"}</div>
      <div>{coin}</div>
      <div>
        <a href={"https://en.wikipedia.org/wiki/" + articleName}>
          some article
        </a>
      </div>
      <div>
        <button onClick={hello}>Say Hello</button>
        <button onClick={() => alert("hello world")}>Say Hello 2</button>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      <h2>inputs</h2>
      <input value={name} onChange={event => setName(event.target.value)} />
      <p>your name is {name.length} characters long.</p>
      <RegistrationForm />
      <TodoList />
    </div>
  );
}

export default App;
