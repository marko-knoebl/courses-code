import React, { useState } from "react";
import "./App.css";

import Rating from "./Rating";
import TodoItem from "./TodoItem";

const articleName = "ReactJS";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const [imgId, setImgId] = useState(11);
  const [todos, setTodos] = useState([
    { id: 1, title: "groceries", completed: false },
    { id: 2, title: "cooking", completed: true },
    { id: 3, title: "gardening", completed: false }
  ]);
  const [inputText, setInputText] = useState("");
  const [rating1, setRating1] = useState(3);

  function handleToggle(id) {
    // this.props.handleToggle(id)

    console.log("toggling todo", id);

    setTodos(
      todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <div className="App">
      <h1>playground</h1>
      <div>A year has {365 * 24} hours.</div>
      <div>Today is {new Date().toLocaleDateString()}</div>
      <a href={"https://en.wikipedia.org/wiki/" + articleName}>some article</a>
      <h2>state</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <br />
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        {count2}
      </button>
      <h2>Slideshow</h2>
      <button
        disabled={imgId === 0}
        onClick={() => {
          if (imgId > 0) {
            setImgId(imgId - 1);
          }
        }}
      >
        prev
      </button>
      <img src={"https://picsum.photos/200?image=" + imgId} />
      <button>next</button> <br />
      image {imgId}
      <h2>Todo</h2>
      <ul>
        {
          // { id: 1, title: "groceries", completed: false}
          // =>
          // <li>TODO: groceries</li>
        }
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onToggle={handleToggle} />
        ))}
      </ul>
      <h2>if</h2>
      <div>{Math.random() > 0.5 ? "heads" : "tails"}</div>
      {/* <h2>dynamic style</h2>

      <div style={{ fontSize: Math.random()*100 }}>random font size</div> */}
      <h2>input</h2>
      <input
        value={inputText}
        onChange={event => {
          setInputText(event.target.value);
        }}
      />
      <h3>{inputText.toUpperCase()}</h3>
      <h2>rating</h2>
      <Rating
        stars={rating1}
        onStarsChange={newStars => {
          setRating1(newStars);
        }}
      />
    </div>
  );
}

export default App;
