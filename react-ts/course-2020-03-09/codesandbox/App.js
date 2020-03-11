import React, { useState } from "react";
import "./styles.css";
import Slideshow from "./Slideshow";

function cointoss() {
  if (Math.random() > 0.5) {
    return "heads";
  } else {
    return "tails";
  }
}

export default function App() {
  const [count, setCount] = useState(0);
  const [coin1, setCoin1] = useState(cointoss());
  const [coin2, setCoin2] = useState(Math.random() > 0.5 ? "heads" : "tails");

  const articleName = "React.js";

  function hello() {
    alert("hello world");
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>Ein Jahr hat {365 * 24} Stunden</div>
      <div>Heute ist der {new Date().toLocaleDateString()}</div>
      <div>Münzwurf 1: {coin1}</div>
      <div>Münzwurf 2: {coin2}</div>
      <div>
        <a href={"https://en.wikipedia.org/wiki/" + articleName}>
          some article
        </a>
      </div>
      <div>
        <button onClick={hello}>click me</button>
      </div>
      <div>
        count: {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          reset
        </button>
      </div>
      <Slideshow />
    </div>
  );
}
