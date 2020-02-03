import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [count, setCount] = useState(0);
  let [coin, setCoin] = useState("not thrown");
  let articleName = "JavaScript";
  let hello = () => {
    console.log("Hello, world!");
  };
  let coinElement;
  if (Math.random() > 0.5) {
    coinElement = <span>Kopf</span>;
  } else {
    coinElement = <span>Zahl</span>;
  }
  return (
    <div className="App">
      <h1>playground</h1>
      <div>Ein Jahr hat {365 * 24} Stunden</div>
      <div>Heute ist der {new Date().toLocaleDateString()}</div>
      <div>Münzwurf 1: {coinElement}</div>
      <div>Münzwurf 2: {Math.random() > 0.5 ? "Kopf" : "Zahl"}</div>
      <div>
        <a href={"https://en.wikipedia.org/wiki/" + articleName}>
          some article
        </a>
      </div>
      <div>
        <button onClick={hello}>hello</button>
      </div>
      <div>
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
          reset
        </button>
      </div>
      <div>
        coin: {coin}
        <button
          onClick={() => {
            setCoin(Math.random() > 0.5 ? "Kopf" : "Zahl");
          }}
        >
          thow coin
        </button>
      </div>
    </div>
  );
};

export default App;
