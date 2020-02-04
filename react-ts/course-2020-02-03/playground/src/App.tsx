import React, { useState, useContext } from "react";
import "./App.css";
import Slideshow from "./Slideshow";
import TodoApp from "./TodoApp";
import Rating from "./Rating";
import SpaceXLaunch from "./SpaceXLaunch";

const App = () => {
  let [count, setCount] = useState(0);
  let [coin, setCoin] = useState("not thrown");
  let [product1, setProduct1] = useState(3);
  let [product2, setProduct2] = useState(2);

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
        <a href={`https://en.wikipedia.org/wiki/${articleName}`}>
          some article
        </a>
      </div>
      <div>
        <button onClick={hello}>hello</button>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
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
      <Slideshow />
      <TodoApp />
      <h2>Products</h2>
      <div>
        Product 1: <Rating stars={product1} onChange={setProduct1} />
      </div>
      <div>
        Product 2:{" "}
        <Rating
          stars={product2}
          onChange={newStars => {
            setProduct2(newStars);
          }}
        />
      </div>
      <SpaceXLaunch />
    </div>
  );
};

export default App;
